import { Checkbox, Col, Collapse, Form, Radio, Row, Select } from "antd";
import { meansOptions, handicapOptions, distances } from "../../utils/data.js";
const { Panel } = Collapse;

const Settings = () => (
  <Collapse accordion>
    <Panel header="Select means of transportation" key="1">
      <Checkbox.Group
        options={meansOptions}
        defaultValue={["Commuter tarin", "S-Bahn"]}
      />
    </Panel>
    <Panel header="Handicap" key="2">
      <Checkbox.Group options={handicapOptions} />
    </Panel>
    <Panel header="Routenotionen" key="3">
      <Radio.Group>
        <Radio value="fastest">fastest</Radio>
        <Radio value="least transfers">least transfers</Radio>
        <Radio value="short walking distance">short walking distance</Radio>
      </Radio.Group>
    </Panel>
    <Panel header="walking options" key="4">
      <Row>
        <Col span={24}>
          <Radio.Group>
            <Radio value="walk slowly">walk slowly</Radio>
            <Radio value="least transfers">walk normal</Radio>
            <Radio value="short walking distance">walk fast</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Form.Item name="distance" label="max. walking distance">
        <Select
          defaultValue="10"
          style={{
            width: 120,
          }}
          options={distances}
        />
      </Form.Item>
    </Panel>
  </Collapse>
);
export default Settings;
