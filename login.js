import React, { Component } from "react";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./login.css";
import "bootstrap/dist/css/bootstrap.css";
import { Redirect } from "react-router-dom";
import axios from "axios";
// import { browserHistory } from "react-router";
import Cookies from "universal-cookie";
var cookies = new Cookies();

class Login extends Component {
  state = {
    username: "",
    password: ""
    // redirect: false
  };

  renderRedirect() {
    if (this.state.redirect) {
      // browserHistory.push("http://cms-bits.herokuapp.com/home");
      var link;
      var desig = cookies.get("designation");
      if (desig == "student") {
        link = "/home";
      } else if (desig == "faculty") {
        link = "/facultyhome";
      } else if (desig == "admin") {
        link = "/adminprofile";
      }
      return <Redirect to={link} />;
    }
  }

  valida = (username, password) => {
    // console.log(username + " " + password);
    axios
      .post("http://nameless-shelf-39498.herokuapp.com/validate", {
        username: username,
        password: password
      })
      .then(res => {
        if (res.data.message == "LOGIN SUCCESSFUL") {
          console.log("in here");
          cookies.set("username", username, { path: "/" });
          cookies.set("designation", res.data.designation, { path: "/" });
          this.setState({ redirect: true });
        } else if (res.data.message == "LOGIN FAILED") {
          alert("username/password is incorrect");
        }
      });
    // console.log("this funvction completed");
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="back">
        {this.renderRedirect()}
        <div className="navbar-header hell">
          <center style={{ color: " #d02552" }}>
            <h1>
              <b>COURSE MANAGEMENT SYSTEM</b>
            </h1>
          </center>
          <center style={{ color: "blue" }}>
            <h3>
              <b>BITS PILANI,Hyderabad Campus</b>
            </h3>
          </center>
        </div>
        <br />
        <center>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/1200px-BITS_Pilani-Logo.svg.png"
            height="13%"
            width="12%"
          />
        </center>
        <br />
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <div className="card-header">
                <h3>Sign In</h3>
                <div className="d-flex justify-content-end social_icon" />
              </div>
              <div className="card-body">
                {/* <form action="/validate" method="POST"> */}
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-user" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="BITSID"
                    name="username"
                    onChange={e => this.setState({ username: e.target.value })}
                    required
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-key" />
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    name="password"
                    onChange={e => this.setState({ password: e.target.value })}
                    required
                  />
                </div>
                {/* <div className="row align-items-center remember">
                  <input type="checkbox">Remember Me</input>
                </div> */}
                <div className="form-group">
                  {/* <input
                    type="submit"
                    value="Login"
                    className="btn float-right login_btn"
                  /> */}
                  <button
                    className="btn btn-warning  login_btn"
                    onClick={() => this.valida(username, password)}
                  >
                    Login
                  </button>
                </div>
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
