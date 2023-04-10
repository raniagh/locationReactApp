import React from "react";
import { Button, Col, Row, Select } from "antd";
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
import "./Footer.css";

const Footer = () => {
  return (
    <Row className="footer">
      <Col span={10} align="center">
        <p>Version 24.03.2023-17:18</p>
        <p>© 2022 Verkehrsverbund Rhein-Ruhr AöR Rhein-Ruhr AöR</p>
      </Col>
      <Col span={2}>
        <Select
          defaultValue="en"
          options={[
            { value: "en", label: "EN" },
            { value: "de", label: "DE" },
          ]}
        />
      </Col>
      <Col span={12} justify="center">
        <Row justify="center">
          <Col span={4}>
            <Button type="link" success>
              <FacebookOutlined />
            </Button>
          </Col>
          <Col span={4}>
            <Button type="link" success>
              <InstagramOutlined />
            </Button>
          </Col>
        </Row>

        <Row justify="space-between">
          <Col span={4}>
            <Button type="link" success>
              General terms
            </Button>
          </Col>
          <Col span={4}>
            <Button type="link" success>
              Privacy policy
            </Button>
          </Col>
          <Col span={4}>
            <Button type="link" success>
              Imprint
            </Button>
          </Col>
          <Col span={4}>
            <Button type="link" success>
              FAQ's
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Footer;
