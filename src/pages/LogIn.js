import React, { useState, Suspense } from "react";
import { Card, Col, Row, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

export default function LogIn() {
  const [values, setValues] = useState(initialValues);
  const [message, setMessage] = useState({ color: "", message: "" });

  const handleClick = () => {
    if (values.email === "" || values.password === "") {
      return "please fill all details";
    } else {
      console.log(values);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "50px",
          minHeight: "100vh",
          backgroundImage:
            'url("https://img.freepik.com/free-photo/old-gray-cement-wall-background_34552-324.jpg?size=626&ext=jpg&ga=GA1.2.1139941274.1609027200")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Card style={{ border: "none", borderRadius: "5px", padding: "0" }}>
            <Row>
              <Col
                style={{
                  background:
                    "linear-gradient(180deg, #22185F 0%, #4D0F6A 100%)",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "50px",
                }}
              >
                <p style={{ fontSize: "2rem" }}>LogIn to MailWithUS</p>
              </Col>
              <Col style={{ padding: "30px 70px" }}>
                <h5 className="text-center">LogIn</h5>
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Enter Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="xyz@mail.com"
                      style={{ width: "100%" }}
                      onChange={(e) => {
                        handleInputChange(e);
                      }}
                    />
                    <small
                      className="form-text text-danger"
                      style={{ zIndex: "-4" }}
                    ></small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="Enter Password"
                      style={{ width: "100%" }}
                      onChange={(e) => {
                        handleInputChange(e);
                      }}
                    />
                    <small className="form-text text-danger"></small>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Button
                      className="btn btn-primary my-2"
                      onClick={() => handleClick()}
                    >
                      Log In
                    </Button>
                  </div>
                </form>
                {/* <Row className="text-center"><span style={{color:`${message.color}`, width:'100%', textAlign:'center'}}>{message.message}&nbsp;{loading && <Loader />}</span></Row> */}
                <Row className="text-center">
                  <Link to="/signup" style={{ width: "100%" }}>
                    Sign Up
                  </Link>
                </Row>
              </Col>
            </Row>
          </Card>
        </Suspense>
      </div>
    </div>
  );
}
