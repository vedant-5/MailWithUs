import React from "react";
import { Row, Col } from "react-bootstrap";
import NavbarHome from "./components/NavbarHome";

export default function Home() {
  return (
    <div>
      <NavbarHome />
      <Row>
        <Col xs={6}></Col>
        <Col xs={6}></Col>
      </Row>
    </div>
  );
}
