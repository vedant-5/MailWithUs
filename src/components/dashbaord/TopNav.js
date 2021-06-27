import React from "react";
import { Row, Col, Button, Avatar } from "antd";
import logo from "../../static/logo.jpg";
import { UserOutlined } from "@ant-design/icons";

export default function TopNav({ user }) {
  const userName = user.toString().toUpperCase();
  return (
    <>
      <div style={{ backgroundColor: "#E85A45" }}>
        <Row style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <Col pull={2}>
            <img src={logo} width="10%" />
          </Col>
          <Col push={5}>
            <Button
              type="primary"
              style={{
                border: "2px solid #E98074",
                backgroundColor: "#E85A45",
              }}
              size="large"
            >
              CONTACT US
            </Button>
          </Col>
          <Col push={6}>
            <Button
              type="primary"
              size="large"
              style={{
                border: "2px solid #E98074",
                backgroundColor: "#E85A45",
              }}
            >
              {userName}'s PROFILE
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
}
