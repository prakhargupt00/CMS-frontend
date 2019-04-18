import React, { Component } from "react";
import "./label.css";
import axios from "axios";

class AddStudent extends Component {
  state = {
    username: "",
    password: "",
    designation: "student"
  };

  addstudentToDb = () => {
    const { username, password, designation } = this.state;
    axios
      .post("http://nameless-shelf-39498.herokuapp.com/api/addstud", {
        username: username,
        password: password,
        designation: designation
      })
      .then(res => {
        console.log(res.data);
      });
  };
  render() {
    return (
      <div>
        <input
          //type="text"
          className="dhruvinput"
          style={{ width: "400px" }}
          onChange={e => this.setState({ username: e.target.value })}
          placeholder="enter StudentID"
        />
        <br />
        <input
          //type="text"
          className="dhruvinput"
          style={{ width: "400px" }}
          onChange={e => this.setState({ password: e.target.value })}
          placeholder="enter secret password"
        />
        <br />
        <button class="button button2" onClick={this.addstudentToDb}>
          Add Student
        </button>
      </div>
    );
  }
}

export default AddStudent;
