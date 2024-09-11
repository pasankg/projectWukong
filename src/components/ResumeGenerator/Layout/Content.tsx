import React from "react";
import { Layout } from "antd";

const { Content } = Layout;
const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const ContentComponent: React.FC = () => (
  <Content style={contentStyle}>Content</Content>
);
export default ContentComponent;
