import React, { useState } from "react";
import RichTextEditor from "react-rte";
import { Row, Col, Button, Modal, Form, notification, Input } from "antd";
import { DatePicker } from "antd";
import { Select } from "antd";
import { TimePicker } from "antd";
import moment from "moment";
import { useHistory } from "react-router";

const { Option } = Select;

const values = {
  userID: "",
  email: "",
  subject: "",
  body: "",
  date: "",
  occurence: "",
  time: "",
};

export default function CreateEmail({ userId }) {
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
  const [subject, setSubject] = useState("");
  const [state, setState] = useState(values);

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

  function onTimeChange(time, timeString) {
    setTime(timeString);
    console.log(time, timeString);
  }

  const handleFinish = (values) => {
    setDate(values.set_date._d);
    setPeriod(values.set_time_period);
    setIsModalVisible(false);
    notification.success({
      message: "Successfully Set Email Occurerence",
    });
  };

  const postEmail = () => {
    var axios = require("axios");
    var data = JSON.stringify(state);

    var config = {
      method: "post",
      url: "http://127.0.0.1:8000/login/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        localStorage.setItem("access", JSON.stringify(response.data));
        window.location.href = "/";
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleEmailFinish = () => {
    setState({
      userID: userId,
      email: input,
      subject: subject,
      body: descriptionTextArea.value.toString("html"),
      date: date,
      occurence: period,
      time: time,
    });
    postEmail();
    setDate("");
    setPeriod("");
    setTime("12:00");
    setInput("");
    notification.success({
      message: "Successfully Set Email",
    });
  };

  console.log(state);

  const format = "HH:mm";

  return (
    <div>
      <div style={{ height: "100vh" }}>
        <Input
          placeholder="Enter Email ID"
          onChange={(e) => setInput(e.target.value)}
        />

        <Input
          placeholder="Enter Subject"
          onChange={(e) => setSubject(e.target.value)}
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
