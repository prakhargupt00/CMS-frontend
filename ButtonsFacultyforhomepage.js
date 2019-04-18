import React, { Component } from "react";
//import axios from "axios";

import "./App.css";
//import App from './App.js';
//import './PostNotification.css';
//import TopicText from './TopicText.js';
//import NotText from './NotText.js';
import "./PostNotificationAdmin.css";

class ButtonsFaculty extends Component {
  constructor(props) {
    super(props);

    //this.state = { topic: "", date: "date", notification: " " };

    //this.changeTopic = this.changeTopic.bind(this);
    this.Change = this.Change.bind(this);
  }

  Change() {
    this.props.action(this.props.id, this.props.course[this.props.id]);
  }

  render() {
    console.log("lol" + this.props.course);
    return (
      <div className="PostNotification">
        <header>
          <a
            href={
              "http://cms-bits.herokuapp.com/facultycoursepage/?" +
              this.props.course[this.props.id]
            }
          >
            {" "}
            <span>
              {" "}
              <input
                type="button"
                class="button1"
                value={this.props.course[this.props.id]}
                onClick={this.Change}
              />{" "}
            </span>
          </a>
        </header>
      </div>
    );
  }
}

export default ButtonsFaculty;
