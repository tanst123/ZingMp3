import classNames from "classnames";
import "./Sidebar.scss";
import { Menu, MenuProps } from "antd";
import axios from "axios";
import useMergeState from "../../../customReactHook/useMergeState";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

type MenuItem = Required<MenuProps>["items"][number];

const Sidebar = () => {
  const [state, setState] = useMergeState({
    loading: true,
    sideBar: [],
  });

  useEffect(() => {
    setTimeout(() => {
      loadApi();
    }, 1000);
  }, []);
  const loadApi = () => {
    const url = process.env.REACT_APP_URL_API;
    axios
      .get(`${url}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem =>
    ({
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem);
  const items = [];
  return (
    <div className={classNames("side-bar")}>
      <Menu defaultSelectedKeys={["1"]} mode="inline" theme="dark" />
    </div>
  );
};

export default Sidebar;
