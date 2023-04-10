import Trips from "./Trips";
import Settings1 from "./Settings";
import StartInput from "./StartInput";
import { Button, Col, Form, Input, Row, Space, Tabs } from "antd";
import {
  SettingOutlined,
  FieldTimeOutlined,
  SearchOutlined,
  RollbackOutlined,
  SwapOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

const layout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 24,
  },
};
const items = [
  {
    label: (
      <span>
        <FieldTimeOutlined />
        TRIPS
      </span>
    ),
    key: "mail",
    children: <Trips />,
  },
  {
    label: (
      <span>
        <SettingOutlined />
        SETTINGS
      </span>
    ),
    key: "app",
    children: <Settings1 />,
  },
];

const LocationForm = () => {
  return (
    <Form
      {...layout}
      layout="vertical"
      name="control-hooks"
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="start"
        label="Start"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Row gutter={8}>
          <Col span={22}>
            <StartInput placeholder="Start (stop, address, POI)" />
          </Col>
          <Col span={1}>
            <Button
              type="primary"
              shape="circle"
              icon={<PlusCircleOutlined />}
            />
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        name="destination"
        label="Destination"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Row gutter={8}>
          <Col span={22}>
            <Input placeholder="Destination (stop, address, POI)" />
          </Col>
          <Col span={1}>
            <Button type="primary" shape="circle" icon={<SwapOutlined />} />
          </Col>
        </Row>
      </Form.Item>

      <Space direction="vertical" size="large" style={{ display: "flex" }}>
        <Tabs defaultActiveKey="1" centered items={items} />
        <Row gutter={16}>
          <Col span={12}>
            <Button
              type="default"
              size="medium"
              icon={<RollbackOutlined />}
              block
            >
              Reset
            </Button>
          </Col>
          <Col span={12}>
            <Button
              type="primary"
              size="medium"
              icon={<SearchOutlined />}
              block
            >
              Search
            </Button>
          </Col>
        </Row>
      </Space>
    </Form>
  );
};

export default LocationForm;
