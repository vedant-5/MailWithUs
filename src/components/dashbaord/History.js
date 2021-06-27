import React from "react";
import { Card, Col, Row } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export default function History() {
  const data = [
    {
      key: "1",
      EmailID: "Email@gmail.com",
      subject: "Lorem Epsum Lorem Epsum",
      content: "Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum",
    },
    {
      key: "2",
      EmailID: "Email@gmail.com",
      subject: "Lorem Epsum Lorem Epsum",
      content: "Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum",
    },
    {
      key: "3",
      EmailID: "Email@gmail.com",
      subject: "Lorem Epsum Lorem Epsum",
      content: "Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum",
    },
    {
      key: "4",
      EmailID: "Email@gmail.com",
      subject: "Lorem Epsum Lorem Epsum",
      content: "Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum",
    },
    {
      key: "5",
      EmailID: "Email@gmail.com",
      subject: "Lorem Epsum Lorem Epsum",
      content: "Lorem Epsum Lorem Epsum Lorem Epsum Lorem Epsum",
    },
  ];
  return (
    <div style={{ height: "100vh" }}>
      {data.map((email) => (
        <Card key={email.key}>
          <Row gutter={40}>
            <Col style={{ fontWeight: "700" }}>{email.EmailID}</Col>
            <Col
              style={{
                fontWeight: "500",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {email.subject}
            </Col>
            <Col style={{ fontWeight: "200", color: "ButtonShadow" }}>
              {email.content}
            </Col>

            <Col push={5}>
              <DeleteOutlined />
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );
}
