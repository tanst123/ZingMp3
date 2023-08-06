import { Layout } from "antd";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

interface propsType {
  children: JSX.Element;
}
const DefaultLayout = (props: propsType) => {
  return (
    <Layout style={{ width: "100%", height: "100%" }}>
      <Layout.Sider>
        <Sidebar />
      </Layout.Sider>
      <Layout>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Content>{props.children}</Layout.Content>
        <Layout.Footer>Footer</Layout.Footer>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
