import React from "react";
import TicketForm from "../components/Location/TicketForm";
import {
  Alert,
  Col,
  Collapse,
  Row,
  Card,
  Switch,
  Space,
  Breadcrumb,
} from "antd";
import { Content } from "antd/es/layout/layout";
import { HomeOutlined, BranchesOutlined } from "@ant-design/icons";
import TicketMap from "../components/Location/TicketMap";

const { Panel } = Collapse;

const getExtra = () => <Switch />;

const Location = () => {
  return (
    <>
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item>
          <HomeOutlined />
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <BranchesOutlined />
          Connections
        </Breadcrumb.Item>
      </Breadcrumb>

      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <Space
                direction="vertical"
                size="large"
                style={{ display: "flex" }}
              >
                <TicketForm />
                <Collapse defaultActiveKey={["1"]}>
                  <Panel
                    showArrow={false}
                    header="Use my tickets (if you want to consider your existing tickets, then enable the slider rule)"
                    extra={getExtra()}
                  >
                    <Alert
                      message="Please log in to consider their valid tickets. log in"
                      type="info"
                    />
                  </Panel>
                </Collapse>
              </Space>
            </Card>
          </Col>
          <Col span={12}>
            <TicketMap />
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default Location;
