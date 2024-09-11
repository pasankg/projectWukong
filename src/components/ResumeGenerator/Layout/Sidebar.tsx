import React from "react";
import { Layout } from "antd";

const {Sider} = Layout;

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};

const SidebarComponent: React.FC = () => (
  <Sider width="25%" style={siderStyle}>
    Sidebar Content Goes here.
  </Sider>
);
export default SidebarComponent;
