import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import TitleBar from "./TitleBar";
import StickyNotes from "./StickyFinal";
//import App from './App.js';
//import './PostNotification.css';
//import DateExtraClass from './DateExtraClass.js';
//import TimeExtraClass from './TimeExtraClass.js';
//import ClassExtraClass from './ClassExtraClass.js';
//import NotText from './NotText.js';

class CourseAllNotification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      length: [],
      topic: [],
      date: [],
      time: [],
      room: [],
      notification: [],
      length1: 0
    };
  }

  componentDidMount() {
    var course = this.props.history.location.search;
    console.log("its properties are " + course.substr(1));
    var courseId = course.substr(1);

    //localhost:5000/coursenotifications/?courseId=CSF111

    axios
      .get(
        "http://nameless-shelf-39498.herokuapp.com/coursenotifications?courseId=" +
          courseId
      )
      .then(res => {
        var topic = [];
        var notification = [];
        var date = [];
        var time = [];
        var length = [];
        var length1 = res.data.length;
        var i = 0;
        console.log("data from ashish" + JSON.stringify(res.data.length));
        for (i = 0; i < res.data.length; i++) {
          topic.push(res.data[i].topic);
          notification.push(res.data[i].notification);
          date.push(res.data[i].date);
          time.push(res.data[i].time);
          length.push(i);
        }

        this.setState({
          topic: topic,
          notification: notification,
          date: date,
          time: time
        });
        this.setState({
          length: length,
          length1: length1
        });
      });
  }

  render() {
    var course = this.props.history.location.search;
    console.log("its properties are " + course.substr(1));
    var courseId = course.substr(1);
    console.log("topic " + this.state.topic);
    console.log("notification " + this.state.notification);
    console.log("date " + this.state.date);
    console.log("time " + this.state.time);
    console.log("length " + this.state.length);
    const data = this.state.length;
    console.log("l " + data);
    return (
      <div>
        <TitleBar />
        <div className="PostNotification">
          <header
            className="PostNotification-header"
            style={{ backgroundColor: "white" }}
          >
            <span style={{ color: "black", textAlign: "center" }}>
              <h1>All Notifications for {courseId}</h1>
              <br />
            </span>
            <span style={{ color: "black" }}> {this.state.data}</span>

            <ul>
              {this.state.length1 <= 0
                ? "NO DB ENTRIES YET"
                : this.state.length.map(dat => (
                    <div
                      style={{
                        color: "gray",
                        border: "solid",
                        borderWidth: "thin",
                        borderRadius: "10px"
                      }}
                    >
                      <li style={{ padding: "10px" }}>
                        <span style={{ color: "gray", fontSize: "30px" }}>
                          <span style={{ color: "black", fontSize: "30px" }}>
                            Topic:
                          </span>{" "}
                          {this.state.topic[dat]}
                        </span>
                        <br />
                        <span style={{ color: "gray", fontSize: "30px" }}>
                          {" "}
                          <span style={{ color: "black", fontSize: "30px" }}>
                            Notification:
                          </span>{" "}
                          {this.state.notification[dat]}
                        </span>
                        <br />
                        <span style={{ color: "gray", fontSize: "30px" }}>
                          {" "}
                          <span style={{ color: "black", fontSize: "30px" }}>
                            Date:
                          </span>{" "}
                          {this.state.time[dat]}
                        </span>
                        <br />
                        <span style={{ color: "gray", fontSize: "30px" }}>
                          {" "}
                          <span style={{ color: "black", fontSize: "30px" }}>
                            Time:
                          </span>{" "}
                          {this.state.date[dat]}
                        </span>
                        <br />
                      </li>
                    </div>
                  ))}
            </ul>
          </header>
        </div>
        {/* <StickyNotes /> */}
      </div>
    );
  }
}

export default CourseAllNotification;
