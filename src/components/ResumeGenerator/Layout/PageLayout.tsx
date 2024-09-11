import React from "react";
import { Flex, Layout } from "antd";
import {
  HeaderComponent,
  SidebarComponent,
  ContentComponent,
  FooterComponent,
} from "./index";

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(50% - 8px)",
  maxWidth: "calc(50% - 8px)",
};

const PageLayout: React.FC = () => (
  <Flex gap="middle" wrap>
    <Layout style={layoutStyle}>
      <SidebarComponent />
      <Layout>
        <HeaderComponent />
        <ContentComponent />
        <FooterComponent />
      </Layout>
    </Layout>
  </Flex>
);

export default PageLayout;
