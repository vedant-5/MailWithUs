import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import NavbarHome from "../NavbarHome";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
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
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
  render() {
    const { errors } = this.state;
    return (
      <>
        <NavbarHome />
        <div className="container">
          <div style={{ marginTop: "4rem" }} className="row">
            <div className="col s8 offset-s2">
              <Link to="/" className="btn-flat waves-effect">
                <i className="material-icons left">keyboard_backspace</i> Back
                to home
              </Link>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <h4>
                  <b>Login</b> below
                </h4>
                <p className="grey-text text-darken-1">
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </div>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    type="email"
                    className={classnames("", {
                      invalid: errors.email || errors.emailnotfound,
                    })}
                  />
                  <label htmlFor="email">Email</label>
                  <span className="red-text">
                    {errors.email}
                    {errors.emailnotfound}
                  </span>
                </div>
                <div className="input-field col s12">
                  <input
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    id="password"
                    type="password"
                    className={classnames("", {
                      invalid: errors.password || errors.passwordincorrect,
                    })}
                  />
                  <label htmlFor="password">Password</label>
                  <span className="red-text">
                    {errors.password}
                    {errors.passwordincorrect}
                  </span>
                </div>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
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
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Login);

// import React, { useState, Suspense } from "react";
// import { Card, Col, Row, Image, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const initialValues = {
//   email: "",
//   password: "",
// };

// export default function LogIn() {
//   const [values, setValues] = useState(initialValues);
//   const [message, setMessage] = useState({ color: "", message: "" });

//   const handleClick = () => {
//     if (values.email === "" || values.password === "") {
//       return "please fill all details";
//     } else {
//       console.log(values);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };
//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           paddingTop: "50px",
//           minHeight: "100vh",
//           backgroundImage:
//             'url("https://img.freepik.com/free-photo/old-gray-cement-wall-background_34552-324.jpg?size=626&ext=jpg&ga=GA1.2.1139941274.1609027200")',
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//         }}
//       >
//         <Suspense fallback={<div>Loading...</div>}>
//           <Card style={{ border: "none", borderRadius: "5px", padding: "0" }}>
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
//                 <p style={{ fontSize: "2rem" }}>LogIn to MailWithUS</p>
//               </Col>
//               <Col style={{ padding: "30px 70px" }}>
//                 <h5 className="text-center">LogIn</h5>
//                 <form>
//                   <div className="form-group">
//                     <label htmlFor="email">Enter Email:</label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       name="email"
//                       id="email"
//                       placeholder="xyz@mail.com"
//                       style={{ width: "100%" }}
//                       onChange={(e) => {
//                         handleInputChange(e);
//                       }}
//                     />
//                     <small
//                       className="form-text text-danger"
//                       style={{ zIndex: "-4" }}
//                     ></small>
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="password">Password:</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       name="password"
//                       id="password"
//                       placeholder="Enter Password"
//                       style={{ width: "100%" }}
//                       onChange={(e) => {
//                         handleInputChange(e);
//                       }}
//                     />
//                     <small className="form-text text-danger"></small>
//                   </div>
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       width: "100%",
//                     }}
//                   >
//                     <Button
//                       className="btn btn-primary my-2"
//                       onClick={() => handleClick()}
//                     >
//                       Log In
//                     </Button>
//                   </div>
//                 </form>
//                 {/* <Row className="text-center"><span style={{color:`${message.color}`, width:'100%', textAlign:'center'}}>{message.message}&nbsp;{loading && <Loader />}</span></Row> */}
//                 <Row className="text-center">
//                   <Link to="/signup" style={{ width: "100%" }}>
//                     Sign Up
//                   </Link>
//                 </Row>
//               </Col>
//             </Row>
//           </Card>
//         </Suspense>
//       </div>
//     </div>
//   );
// }
