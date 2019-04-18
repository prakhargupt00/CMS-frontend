import React, { Component } from "react";
import axios from "axios";

import "./App.css";
//import App from './App.js';
//import './PostNotification.css';
import TopicText from "./TopicText.js";
import NotText from "./NotText.js";
import "./PostNotificationAdmin.css";

class OthersPostNotification extends Component {
  constructor(props) {
    super(props);

    this.state = { topic: "", date: "date", notification: " " };

    this.changeTopic = this.changeTopic.bind(this);
    this.changeText = this.changeText.bind(this);
  }
  changeText(e) {
    this.setState({ notification: e });
  }
  changeTopic(e) {
    this.setState({ topic: e });
  }

  putDataToDB = message => {
    let topic = this.state.topic;
    let notification = this.state.notification;
    let date = this.state.date;
    let time = this.state.time;
    let course = this.props.courseId;

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
      <div className="PostNotification">
        <header
          className="PostNotification-header"
          style={{ backgroundColor: "white" }}
        >
          <TopicText topic={this.state.topic} action={this.changeTopic} />
          <span style={{ color: "grey", fontSize: "20px", padding: "4px" }}>
            Notification :{" "}
          </span>
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

export default OthersPostNotification;
