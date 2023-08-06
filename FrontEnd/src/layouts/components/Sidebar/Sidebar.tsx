import classNames from "classnames";
import "./Sidebar.scss";
import { Menu, MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const Sidebar = () => {
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
