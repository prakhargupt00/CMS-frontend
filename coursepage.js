import React, { Component } from "react";
import "./App.css";
import NotificationTab from "./CollegeNotificationBox.js";
import TitleBar from "./TitleBar.js";
import CourseMaterialView from "./CourseMaterialView.js";
import "./ePostNotificationExtraClass.css";
import StickyNotes from "./StickyFinal";
import "./MiniNotificationTab.css";
import PreviousPaperView from "./PreviousPaperView.js";
import CourseAllNotification from "./getAllNotificationOfCourse.js";
var axios = require("axios");

class CoursePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var course = this.props.history.location.search;
    console.log("its properties are " + course.substr(1));
    var courseId = course.substr(1);
    console.log("course id is " + courseId);
    var str =
      "http://cms-bits.herokuapp.com/studentperformanceanalysis/?" +
      course.substr(1);
    console.log("str is " + str);
    return (
      <div>
        <TitleBar />
        <NotificationTab />
        <div
          style={{
            float: "left",
            padding: 15,
            width: "1000px",
            margin: "10px"
          }}
        >
          <CourseMaterialView courseId={course.substr(1)} />
        </div>
        <div style={{ float: "right", padding: 15 }}>
          <StickyNotes />
        </div>
        <div style={{ float: "right", padding: 15, width: "400px" }}>
          <a href={str}>
            <input
              type="submit"
              class="button1"
              value="Performance Analysis"
              onClick={() => console.log("on clicking this button " + str)}
            />
          </a>
          <a href={"http://cms-bits.herokuapp.com/notification/?" + courseId}>
            <input
              type="submit"
              class="button1"
              value="View All Notifications"
              onClick={() => console.log("on clicking this button " + str)}
            />
          </a>
          <PreviousPaperView courseId={courseId} />
        </div>
      </div>
    );
  }
}

export default CoursePage;
