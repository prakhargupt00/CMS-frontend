import React, { Component } from "react";
import axios from "axios";

import "./App.css";
//import App from './App.js';
//import './PostNotification.css';
import DateExtraClass from "./DateExtraClass.js";
import TimeExtraClass from "./TimeExtraClass.js";
import ClassExtraClass from "./ClassExtraClass.js";
import NotText from "./NotText.js";
import "./ePostNotificationExtraClass.css";

class PostNotificationExtraClass extends Component {
  constructor(props) {
    super(props);
    var t = "F102";
    var l = "12:00 AM";
    // var d='1212';
    this.state = {
      topic: "Extra class",
      date: "date",
      time: l,
      room: t,
      notification: "Dear Students,\n "
    };

    this.changeDate = this.changeDate.bind(this);
    this.changeTime = this.changeTime.bind(this);
    this.changeClass = this.changeClass.bind(this);
    this.changeText = this.changeText.bind(this);
  }
  changeDate(date) {
    this.setState({
      date: date,
      notification:
        " DearStudents,\n There is an Extra Class on " +
        date +
        " at " +
        this.state.time +
        " in the class " +
        this.state.room,
      topic: "Extra class on" + date
    });
  }
  changeTime(time) {
    this.setState({
      time: time,
      notification:
        " DearStudents,\n There is an Extra Class on " +
        this.state.date +
        " at " +
        time +
        " in the class " +
        this.state.room
    });
  }
  changeClass(room) {
    //console.lo
    this.setState({
      room: room,
      notification:
        " DearStudents,\n There is an Extra Class on " +
        this.state.date +
        " at " +
        this.state.time +
        " in the class " +
        room
    });
  }
  changeText(e) {
    this.setState({ notification: e });
  }

  putDataToDB = message => {
    let topic = this.state.topic;
    let notification = this.state.notification;
    let date = this.state.date;
    let time = this.state.time;
    let course = this.props.courseId;
    console.log("in epostnotificagtion courseid is " + this.props.courseId);

    axios.post("/create", {
      courseId: course,
      notification: notification,
      topic: topic,
      date: date,
      time: time
    });
  };

  render() {
    return (
      <div className="PostNotification" style={{ width: "1700px" }}>
        <header
          className="PostNotification-header"
          style={{ backgroundColor: "white" }}
        >
          <span style={{ color: "red" }}>
            <h2>Post Notification For Extra Class</h2>
          </span>
          <span style={{ color: "black", fontSize: "20px", padding: "4px" }}>
            <span style={{ color: "grey", fontSize: "20px", padding: "4px" }}>
              Topic :
            </span>{" "}
            Extra Class is on {this.state.date}
            <br />
          </span>
          <DateExtraClass date={this.state.date} action={this.changeDate} />
          <TimeExtraClass date={this.state.date} action={this.changeTime} />
          <ClassExtraClass date={this.state.date} action={this.changeClass} />
          <span
            style={{
              color: "grey",
              fontSize: "20px",
              padding: "4px",
              width: "1200px"
            }}
          >
            Resulted Notification:
            <br />
          </span>
          {/* <span style={{ color: "black" }}> {this.state.notification}</span> */}
          <NotText
            notification={this.state.notification}
            action={this.changeText}
          />

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

export default PostNotificationExtraClass;
