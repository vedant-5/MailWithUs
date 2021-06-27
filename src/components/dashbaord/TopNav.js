import React from "react";
import { Row, Col, Button, Avatar } from "antd";
import logo from "../../static/imgpart01.jpeg";

export default function TopNav({ user }) {
  const userName = user.toString().toUpperCase();
  return (
    <>
      <div style={{ backgroundColor: "#E85A45" }}>
        <Row style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <Col pull={5}>
            <img src={logo} width="10%" />
          </Col>
          <Col push={1}>
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
          <Col push={2}>
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
