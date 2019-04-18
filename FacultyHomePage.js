import React, { Component } from "react";
import axios from "axios";

import "./App.css";
//import App from './App.js';
//import './PostNotification.css';
//import DateExtraClass from './DateExtraClass.js';
//import TimeExtraClass from './TimeExtraClass.js';
//import ClassExtraClass from './ClassExtraClass.js';
//import NotText from './NotText.js';
import "./PostNotificationAdmin.css";
import ButtonsFaculty from "./ButtonsFacultyforhomepage.js";
import Cookies from "universal-cookie";
import TitleBar from "./TitleBar";
import NotificationTab from "./CollegeNotificationBox";
import StickyNotes from "./StickyFinal";
var cookies = new Cookies();

class FacultyHomePage extends Component {
  constructor(props) {
    super(props);

    this.state = { courses: [], length: [] };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, v) {
    console.log(e + " " + v);
  }
  componentDidMount() {
    console.log("mounting component");
    var facultyId = cookies.get("username");
    console.log("faculty for id" + facultyId);
    axios
      .get(
        "http://nameless-shelf-39498.herokuapp.com/getcoursesforfaculty/?id=" +
          facultyId
      )
      .then(res => {
        var length = [];
        var courses = [];
        console.log("response from ashish " + res.data);
        var i = 0;
        for (i = 0; i < res.data.length; i++) {
          courses.push(res.data[i].courseId);
          length.push(i);
        }

        this.setState({
          courses: courses
        });
        this.setState({
          length: length
        });
      });
  }

  render() {
    console.log("length " + this.state.length);
    const data = this.state.length;
    console.log("l" + data);
    console.log("all courses for ashish " + this.state.courses);
    return (
      <div>
        <NotificationTab />
        <h2>Course you are enrolled in</h2>
        <div className="PostNotification" style={{ width: "100px" }}>
          <header
            className="PostNotification-header"
            style={{ backgroundColor: "white" }}
          >
            <ul>
              {this.state.length <= 0
                ? "NO DB ENTRIES YET"
                : this.state.length.map(dat => (
                    <ButtonsFaculty
                      id={dat}
                      course={this.state.courses}
                      action={this.handleChange}
                    />
                  ))}
            </ul>
          </header>
        </div>
        <div style={{ float: "right" }}>
          <StickyNotes />
        </div>
      </div>
    );
  }
}

export default FacultyHomePage;
