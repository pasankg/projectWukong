import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const HeaderComponent: React.FC = () => (
  <Header style={headerStyle}>Header</Header>
);

export default HeaderComponent;
