import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import NavbarHome from "../NavbarHome";
import { Row, Col } from "antd";
import bg from "../../static/bgsignlog.jpeg";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.registerUser(newUser, this.props.history);
  };
  render() {
    const { errors } = this.state;
    return (
      <>
        <NavbarHome />
        <Row>
          <Col>
            <img src={bg} />
          </Col>
          <Col>
            <div className="container">
              <div className="row">
                <div className="col s8 offset-s2">
                  <Link to="/" className="btn-flat waves-effect">
                    <i className="material-icons left">keyboard_backspace</i>{" "}
                    Back to home
                  </Link>
                  <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                    <h4>
                      <b>Register</b> below
                    </h4>
                    <p className="grey-text text-darken-1">
                      Already have an account? <Link to="/login">Log in</Link>
                    </p>
                  </div>
                  <form noValidate onSubmit={this.onSubmit}>
                    <div className="input-field col s12">
                      <input
                        onChange={this.onChange}
                        value={this.state.name}
                        error={errors.name}
                        id="name"
                        type="text"
                        className={classnames("", {
                          invalid: errors.name,
                        })}
                      />
                      <label htmlFor="name">Name</label>
                      <span className="red-text">{errors.name}</span>
                    </div>
                    <div className="input-field col s12">
                      <input
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                        id="email"
                        type="email"
                        className={classnames("", {
                          invalid: errors.email,
                        })}
                      />
                      <label htmlFor="email">Email</label>
                      <span className="red-text">{errors.email}</span>
                    </div>
                    <div className="input-field col s12">
                      <input
                        onChange={this.onChange}
                        value={this.state.password}
                        error={errors.password}
                        id="password"
                        type="password"
                        className={classnames("", {
                          invalid: errors.password,
                        })}
                      />
                      <label htmlFor="password">Password</label>
                      <span className="red-text">{errors.password}</span>
                    </div>
                    <div className="input-field col s12">
                      <input
                        onChange={this.onChange}
                        value={this.state.password2}
                        error={errors.password2}
                        id="password2"
                        type="password"
                        className={classnames("", {
                          invalid: errors.password2,
                        })}
                      />
                      <label htmlFor="password2">Confirm Password</label>
                      <span className="red-text">{errors.password2}</span>
                    </div>
                    <div
                      className="col s12"
                      style={{ paddingLeft: "11.250px" }}
                    >
                      <button
                        style={{
                          width: "150px",
                          borderRadius: "3px",
                          letterSpacing: "1.5px",
                          marginTop: "1rem",
                        }}
                        type="submit"
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));

// import React, { useState, useEffect, Suspense } from "react";
// import { Card, Col, Row, Button, Image } from "react-bootstrap";
// import { Link ,withRouter} from "react-router-dom";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { registerUser } from "../../actions/authActions";

// const initialValues = {
//   name: "",
//   phone: "",
//   email: "",
//   password: "",
//   cpassword: "",
// };

// function Register({props}) {
//   const [values, setValues] = useState(initialValues);
//   const [errors, setErrors] = useState({ password: "" });
//   const [position, setPosition] = useState(null);

//   // const postRegister = () => {
//   //     var axios = require('axios');
//   //     var data = JSON.stringify({"email":values.email,"password":values.password,"phone_number":values.phone, "first_name": values.name});

//   //     var config = {
//   //     method: 'post',
//   //     url: 'http://127.0.0.1:8000/signup/employee',
//   //     headers: {
//   //         'Content-Type': 'application/json'
//   //     },
//   //     data : data
//   //     };

//   //     axios(config)
//   //     .then(function (response) {
//   //     console.log(JSON.stringify(response.data));
//   //     localStorage.setItem('access',JSON.stringify(response.data));
//   //     window.location.href = '/';
//   //     })
//   //     .catch(function (error) {
//   //     console.log(error);
//   //     });
//   // }

//   const validate = (fieldValues = values) => {
//     // console.log(position);

//     let temp = { ...errors };
//     if ("phone" in fieldValues)
//       temp.phone = fieldValues.phone ? "" : "This field is required.";
//     if ("email" in fieldValues)
//       temp.email =
//         /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
//           fieldValues.email
//         )
//           ? ""
//           : "Email is not valid.";
//     // if(position === null){
//     //   temp.position = position ? "" : "This field is required."
//     //   console.log(temp);
//     // }

//     setErrors({
//       ...temp,
//     });
//   };

//   useEffect(() => {
//     let temp = { ...errors };
//     if (temp.password === "") {
//       temp.cpassword =
//         values.password === values.cpassword ? "" : "Passwords do not match";
//     } else if (temp.password !== "" && values.password !== "") {
//       temp.cpassword = "Please fill the password field Correctly";
//     }
//     setErrors({
//       ...temp,
//     });
//   }, [values.cpassword]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//     validate({ [name]: value });
//   };

//   const handleClick = () => {
//     validate();
//     if (errors.phone === "" && errors.email === "") {
//       props.registerUser
//       console.log(values);
//     }
//   };

//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           minHeight: "100vh",
//           backgroundImage:
//             'url("https://img.freepik.com/free-photo/old-gray-cement-wall-background_34552-324.jpg?size=626&ext=jpg&ga=GA1.2.1139941274.1609027200")',
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//         }}
//       >
//         <Suspense fallback={<div>Loading...</div>}>
//           <Card
//             style={{
//               position: "relative",
//               borderRadius: "5px",
//               margin: "120px",
//             }}
//           >
//             <Row>
//               <Col
//                 style={{
//                   background:
//                     "linear-gradient(180deg, #22185F 0%, #4D0F6A 100%)",
//                   color: "white",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   padding: "50px",
//                 }}
//               >
//                 <p style={{ fontSize: "2rem" }}>Sign Up to MailWithUs</p>
//               </Col>
//               <Col style={{ padding: "30px 70px" }}>
//                 <Row>
//                   <Col>
//                     <h4 className="text-center">SignUp</h4>
//                     <form>
//                       <Row>
//                         <Col>
//                           <div
//                             className="form-group"
//                             style={{ marginBottom: "0px" }}
//                           >
//                             <label
//                               htmlFor="name"
//                               style={{ marginBottom: "0px" }}
//                             >
//                               Enter Name:
//                             </label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="name"
//                               id="name"
//                               placeholder="Name.."
//                               style={{ width: "100%" }}
//                               onChange={(e) => {
//                                 handleInputChange(e);
//                               }}
//                             />
//                             <small className="form-text text-danger">
//                               {errors.phone}&nbsp;
//                             </small>
//                           </div>
//                         </Col>
//                         <Col>
//                           <div
//                             className="form-group"
//                             style={{ marginBottom: "0px" }}
//                           >
//                             <label
//                               htmlFor="phone"
//                               style={{ marginBottom: "0px" }}
//                             >
//                               Enter Phone Number:
//                             </label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               name="phone"
//                               id="phone"
//                               style={{ width: "100%" }}
//                               onChange={(e) => {
//                                 handleInputChange(e);
//                               }}
//                             />
//                             <small className="form-text text-danger">
//                               {errors.phone}&nbsp;
//                             </small>
//                           </div>
//                         </Col>
//                       </Row>

//                       <Row>
//                         <Col>
//                           <div
//                             className="form-group"
//                             style={{ marginBottom: "0px" }}
//                           >
//                             <label
//                               htmlFor="email"
//                               style={{ marginBottom: "0px" }}
//                             >
//                               Enter Email
//                             </label>
//                             <input
//                               type="email"
//                               className="form-control"
//                               name="email"
//                               id="email"
//                               style={{ width: "100%" }}
//                               onChange={(e) => {
//                                 handleInputChange(e);
//                               }}
//                             />
//                             <small className="form-text text-danger">
//                               {errors.email}&nbsp;
//                             </small>
//                           </div>
//                         </Col>
//                       </Row>

//                       <Row>
//                         <Col>
//                           <div
//                             className="form-group"
//                             style={{ marginBottom: "0px" }}
//                           >
//                             <label
//                               htmlFor="password"
//                               style={{ marginBottom: "0px" }}
//                             >
//                               Enter Password:
//                             </label>
//                             <input
//                               type="password"
//                               className="form-control"
//                               name="password"
//                               id="password"
//                               style={{ width: "100%" }}
//                               onChange={(e) => {
//                                 handleInputChange(e);
//                               }}
//                             />
//                             <small className="form-text text-danger">
//                               {errors.password}&nbsp;
//                             </small>
//                           </div>
//                         </Col>
//                       </Row>

//                       <Row>
//                         <Col>
//                           <div
//                             className="form-group"
//                             style={{ marginBottom: "0px" }}
//                           >
//                             <label
//                               htmlFor="cpassword"
//                               style={{ marginBottom: "0px" }}
//                             >
//                               Confirm Password:{" "}
//                             </label>
//                             <input
//                               type="password"
//                               className="form-control"
//                               name="cpassword"
//                               id="cpassword"
//                               style={{ width: "100%" }}
//                               onChange={(e) => {
//                                 handleInputChange(e);
//                               }}
//                             />
//                             <small className="form-text text-danger">
//                               {errors.cpassword}&nbsp;
//                             </small>
//                           </div>
//                         </Col>
//                       </Row>
//                     </form>
//                     <div
//                       style={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         width: "100%",
//                       }}
//                     >
//                       <Button
//                         className="btn btn-primary my-2"
//                         onClick={handleClick}
//                       >
//                         Submit
//                       </Button>
//                     </div>
//                     <Row className="text-center">
//                       <Link to="/login" style={{ width: "100%" }}>
//                         Already a User? Login!
//                       </Link>
//                     </Row>
//                   </Col>
//                 </Row>
//               </Col>
//             </Row>
//           </Card>
//         </Suspense>
//       </div>
//     </>
//   );
// }

// Register.propTypes = {
//   registerUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   errors: state.errors,
// });

// export default connect(mapStateToProps, { registerUser })(withRouter(Register));
