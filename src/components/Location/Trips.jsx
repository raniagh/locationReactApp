import { Col, Radio, Row } from "antd";
import React from "react";

function Trips() {
  return (
    <Row>
      <Col span={24} align="center">
        <Radio.Group>
          <Radio value="departure">Departure</Radio>
          <Radio value="arrival">Arrival</Radio>
        </Radio.Group>
      </Col>
      <Col span={24}></Col>
    </Row>
  );
}

export default Trips;
