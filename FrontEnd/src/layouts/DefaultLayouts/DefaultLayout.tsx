import { Layout } from "antd";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import images from "../../assets/images";
import { Link } from "react-router-dom";

interface propsType {
  children: JSX.Element;
}
const DefaultLayout = (props: propsType) => {
  return (
    <Layout style={{ width: "100%", height: "100%" }}>
      <Layout.Sider>
        <Link to="/" className="w-full h-16 flex pl-5 items-center ">
          <img src={images.logo} alt="Logo zingMp3" className="w-30 h-10" />
        </Link>
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
