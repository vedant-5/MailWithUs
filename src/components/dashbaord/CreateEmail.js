import React, { useState } from "react";
import RichTextEditor from "react-rte";
import { Row, Col, Button, Modal, Form, notification, Input } from "antd";
import { DatePicker } from "antd";
import { Select } from "antd";
import { TimePicker } from "antd";
import moment from "moment";
import { useHistory } from "react-router";

const { Option } = Select;

export default function CreateEmail() {
  const [form] = Form.useForm();

  const [descriptionTextArea, setDescriptionTextArea] = useState({
    value: RichTextEditor.createEmptyValue(),
  });
  const onDescriptionChanges = (value) => {
    setDescriptionTextArea({ ...descriptionTextArea, value });
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [date, setDate] = useState();
  const [period, setPeriod] = useState("");
  const [time, setTime] = useState("12:00");
  const [input, setInput] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const handleFinish = (values) => {
    setDate(values.set_date._d);
    setPeriod(values.set_time_period);
    setIsModalVisible(false);
    notification.success({
      message: "Successfully Set Email Occurerence",
    });
  };

  function onTimeChange(time, timeString) {
    setTime(timeString);
    console.log(time, timeString);
  }

  const handleEmailFinish = () => {
    console.log(
      date,
      period,
      time,
      descriptionTextArea.value.toString("html"),
      input
    );
    setDate("");
    setPeriod("");
    setTime("12:00");
    setInput("");
    notification.success({
      message: "Successfully Set Email",
    });
  };

  const format = "HH:mm";

  return (
    <div>
      <div style={{ height: "100vh" }}>
        <Input
          placeholder="Enter Email ID"
          onChange={(e) => setInput(e.target.value)}
        />

        <RichTextEditor
          placeholder="Description..."
          value={descriptionTextArea.value}
          onChange={onDescriptionChanges}
          autoFocus
        />
        <Row gutter={10} style={{ marginTop: "10px" }} justify="end">
          <Col>
            <Button danger size="large" onClick={showModal}>
              Set Occurence
            </Button>
          </Col>
          <Col>
            <Button
              style={{
                border: "1px solid #E85A45",
                backgroundColor: "#E85A45",
              }}
              size="large"
              type="primary"
              onClick={handleEmailFinish}
            >
              Schedule Email
            </Button>
          </Col>
        </Row>
        <Modal
          title="Set Schedule"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <Form form={form} name="occurence" onFinish={handleFinish}>
            <Form.Item
              name="set_date"
              label="Set Date"
              rules={[
                {
                  required: true,
                  message: "Please Enter Date",
                },
              ]}
            >
              <DatePicker onChange={onChange} />
            </Form.Item>

            <Form.Item
              name="set_time_period"
              label="Set Time Period"
              rules={[
                {
                  required: true,
                  message: "Please Enter Period",
                },
              ]}
            >
              <Select style={{ width: "80%" }} onChange={handleChange}>
                <Option value="Weekly">Weekly</Option>
                <Option value="Monthly">Monthly</Option>
                <Option value="Yearly">Yearly</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="set_time"
              label="Set Time"
              //   rules={[
              //     {
              //       required: true,
              //       message: "Please Enter Time",
              //     },
              //   ]}
            >
              <TimePicker
                defaultValue={moment("12:00", format)}
                format={format}
                onChange={onTimeChange}
              />
              ,
            </Form.Item>
            <Row gutter={10} justify="end">
              <Col>
                <Button
                  type="outlined"
                  danger
                  size="large"
                  onClick={() => setIsModalVisible(false)}
                >
                  Cancel
                </Button>
              </Col>
              <Col>
                <Button type="primary" size="large" danger htmlType="submit">
                  Done
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal>
      </div>
    </div>
  );
}
