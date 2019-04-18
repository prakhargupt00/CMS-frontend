import React, { Component } from "react";
import axios from "axios";

import "./App.css";
//import App from './App.js';
//import './PostNotification.css';
import TopicText from "./TopicText.js";
import NotText from "./NotText.js";
import "./PostNotificationAdmin.css";
import TitleBar from "./TitleBar";
import StickyNotes from "./StickyFinal";

class PreviousPaperView extends Component {
  constructor(props) {
    super(props);

    this.state = { topic: "", date: "date", notification: " " };

    //this.changeTopic = this.changeTopic.bind(this);
    //this.changeText = this.changeText.bind(this);
  }

  render() {
    return (
      <div>
        <div className="PostNotification">
          <header
            className="PostNotification-header"
            style={{ backgroundColor: "white" }}
          >
            <a
              href={
                "http://cms-bits.herokuapp.com/previousyearpaper/?" +
                this.props.courseId
              }
            >
              {" "}
              <span>
                {" "}
                <input
                  type="button"
                  class="button1"
                  value="View Previous Year Paper"
                />{" "}
              </span>
            </a>
          </header>
        </div>
      </div>
    );
  }
}

export default PreviousPaperView;
