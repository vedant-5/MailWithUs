import React from "react";
import { Row, Col } from "react-bootstrap";
import { Button } from "antd";
import NavbarHome from "./components/NavbarHome";
import { Link } from "react-router-dom";
import bg from "./static/bgsignlog.jpeg";

export default function Home() {
  return (
    <div>
      <NavbarHome />
      <Row>
        <Col>
          <img src={bg} />
        </Col>
        <Col>
          <Row xs={6}>
            <Link to="/register">
              <Button>SIGN IN</Button>
            </Link>
          </Row>
          <Row xs={6}>
            <Link to="/login">
              <Button>LOG IN</Button>
            </Link>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
