import classNames from "classnames";
import "./Sidebar.scss";
import { Menu, MenuProps } from "antd";
import useMergeState from "../../../customReactHook/useMergeState";
import { useEffect } from "react";
import httpRequest from "../../../utils/httpRequest";
import { useAppDispatch, useAppSelector } from "../../../store";
import { MENU_LAYOUT } from "../../../reducer/zingSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRadio,
  faChartLine,
  faIcons,
  faMusic,
  faPlus,
  faRankingStar,
  faStroopwafel,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle, faStar } from "@fortawesome/free-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import _ from "lodash";
import { Link } from "react-router-dom";
import config from "../../../configs";
type MenuItem = Required<MenuProps>["items"][number];
type stateType = {
  loading: boolean;
  sidebar: any;
};
type ItemType = {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  children?: MenuItem[] | undefined | null;
  type?: "group";
};

type MenuIcon = {
  label: string;
  type: React.ReactNode;
};
const Sidebar = () => {
  const dispatch = useAppDispatch();
  const menu = useAppSelector((state) => state.root.sideMenu);
  const [state, setState] = useMergeState({
    loading: true,
  });

  useEffect(() => {
    loadApi();
  }, []);

  const loadApi = async () => {
    await httpRequest
      .get("/menu")
      .then((res) => dispatch(MENU_LAYOUT(res.data)))
      .catch((err) => console.log(err));
  };
  const getItem = ({ label, key, icon, children, type }: ItemType): MenuItem =>
    ({
      key,
      icon: icon,
      children: [] ? null : children,
      label,
      type,
    } as MenuItem);
  const menuIcon: MenuIcon[] = [
    {
      label: "faCircle",
      type: <FontAwesomeIcon icon={faCircle as IconProp} />,
    },
    {
      label: "faRadio",
      type: <FontAwesomeIcon icon={faRadio as IconProp} />,
    },
    {
      label: "faChartLine",
      type: <FontAwesomeIcon icon={faChartLine as IconProp} />,
    },
    {
      label: "faIcons",
      type: <FontAwesomeIcon icon={faIcons as IconProp} />,
    },
    {
      label: "faMusic",
      type: <FontAwesomeIcon icon={faMusic as IconProp} />,
    },
    {
      label: "faStroopwafel",
      type: <FontAwesomeIcon icon={faStroopwafel as IconProp} />,
    },
    {
      label: "faPlus",
      type: <FontAwesomeIcon icon={faPlus as IconProp} />,
    },
    {
      label: "faStar",
      type: <FontAwesomeIcon icon={faStar as IconProp} />,
    },
    {
      label: "faRankingStar",
      type: <FontAwesomeIcon icon={faRankingStar as IconProp} />,
    },
  ];
  const linkPaths = config.routes.map((item) => ({
    label: item.label,
    type: <Link to={item.path}>{item.label}</Link>,
  }));

  const linkMenu = (labelText: any) => {
    return _.get(
      linkPaths.find((item) => item.label == labelText),
      "type"
    );
  };

  const items: MenuItem[] = _.orderBy(
    menu.map((menuItem: ItemType) => {
      return getItem({
        ...menuItem,
        label: linkMenu(menuItem.label),
        icon: _.get(
          menuIcon.find((item) => item.label === menuItem.icon),
          "type"
        ),
      });
    }),
    "key"
  );
  return (
    <div className={classNames("side-bar")}>
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        theme="dark"
        items={items}
        style={{ fontSize: "16px", height: "100wh" }}
      />
    </div>
  );
};

export default Sidebar;
