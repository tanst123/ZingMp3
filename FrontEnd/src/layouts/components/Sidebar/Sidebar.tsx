import classNames from "classnames";
import "./Sidebar.scss";
import { Menu, MenuProps } from "antd";
import axios from "axios";
import useMergeState from "../../../customReactHook/useMergeState";
import { useEffect, useState } from "react";
import httpRequest from "../../../utils/httpRequest";

type MenuItem = Required<MenuProps>["items"][number];
type stateType = {
  loading: boolean;
  sidebar: any;
};
const Sidebar = () => {
  const [state, setState] = useMergeState({
    loading: true,
    sideBar: [],
  });

  useEffect(() => {
    loadApi();
  }, []);

  const loadApi = async () => {
    await httpRequest
      .get("/menu")
      .then((res) => setState({ sideBar: res.data }))
      .catch((err) => console.log(err));
  };
  console.log(state.sideBar);
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
