import React from "react";
import { Col, Row } from "antd";
import { PageLayout } from "./index";

const Grid: React.FC = () => (
  <>
    <Row>
      <Col span={24}>
        <PageLayout />
      </Col>
    </Row>
  </>
);

export default Grid;
