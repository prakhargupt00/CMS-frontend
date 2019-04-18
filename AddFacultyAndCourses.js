import React, { Component } from "react";
import axios from "axios";

import "./App.css";
//import App from './App.js';
//import './PostNotification.css';
//import FileNameClass from './FileNameClass.js';
//import FileLinkClass from './FileLinkClass.js';
import "./ePostNotificationExtraClass.css";

class AddFacultyAndCourses extends Component {
  constructor(props) {
    super(props);

    this.state = { id: "", name: "", course1: "", course2: "" };

    this.changeId = this.changeId.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeCourse1 = this.changeCourse1.bind(this);
    this.changeCourse2 = this.changeCourse2.bind(this);
  }
  changeId(e) {
    //console.lo
    console.log("filelink:" + e);
    this.setState({ id: e.target.value });
  }
  changeName(e) {
    console.log("fileName:" + e);
    this.setState({ name: e.target.value });
  }
  changeCourse1(e) {
    console.log("fileName:" + e);
    this.setState({ course1: e.target.value });
  }
  changeCourse2(e) {
    console.log("fileName:" + e);
    this.setState({ course2: e.target.value });
  }

  putDataToDB = message => {
    let id = this.state.id;
    let name = this.state.name;
    let course1 = this.state.course1;
    let course2 = this.state.course2;

    console.log("hokos");
    console.log("asad" + course1);

    axios.post(
      "http://nameless-shelf-39498.herokuapp.com/addfacultyandcourse",
      {
        id: id,
        name: name,
        course1: course1,
        course2: course2
      }
    );
  };

  render() {
    return (
      <div className="PostNotification">
        <header
          className="PostNotification-header"
          style={{ backgroundColor: "white" }}
        >
          <span style={{ color: "red" }}>
            <h2>Add Faculty And Courses</h2>
          </span>

          <span style={{ color: "grey" }}>
            Enter FacultyId:
            <span style={{ color: "red" }}>
              {" "}
              <input type="test" name="Faculty Id" onChange={this.changeId} />
              <br />
            </span>{" "}
          </span>

          <span style={{ color: "grey" }}>
            Enter Faculty Name:
            <span style={{ color: "red" }}>
              {" "}
              <input
                type="test"
                name="Faculty Name"
                onChange={this.changeName}
              />
              <br />
            </span>{" "}
          </span>

          <span style={{ color: "grey" }}>
            Enter Course1:
            <span style={{ color: "red" }}>
              {" "}
              <input type="test" name="course1" onChange={this.changeCourse1} />
              <br />
            </span>{" "}
          </span>

          <span style={{ color: "grey" }}>
            Enter Course2:
            <span style={{ color: "red" }}>
              {" "}
              <input type="test" name="course2" onChange={this.changeCourse2} />
              <br />
            </span>{" "}
          </span>

          <span>
            {" "}
            <input
              type="button"
              class="button1"
              value="post it!"
              onClick={() => this.putDataToDB(this.state.message)}
            />{" "}
          </span>
        </header>
      </div>
    );
  }
}

export default AddFacultyAndCourses;
