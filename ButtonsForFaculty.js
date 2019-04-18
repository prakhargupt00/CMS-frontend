import React, { Component } from "react";

import "./App.css";
import "./ButtonsForFaculty.css";
import PostNotificationExtraClass from "./ePostNotificationExtraClass.js";
import PostNotificationCancelClass from "./PostNotificationCancelClass.js";
import OthersPostNotification from "./OthersPostNotification.js";
import GetNotifications from "./getAllNotificationOfCourse.js";
import UploadCourseMaterial from "./UploadCourseMaterial.js";
import TitleBar from "./TitleBar.js";
import StickyNotes from "./StickyFinal";

class ButtonsForFaculty extends Component {
  constructor(props) {
    super(props);
    this.state = { id: 0 };
    this.handlClick1 = this.handlClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick5 = this.handleClick5.bind(this);
  }

  handlClick1() {
    console.log("ha");
    this.setState({ id: 1 });
  }
  handleClick2() {
    console.log("ha");
    this.setState({ id: 2 });
  }
  handleClick3() {
    console.log("ha");
    this.setState({ id: 3 });
  }
  handleClick4() {
    console.log("ha");
    this.setState({ id: 4 });
  }
  handleClick5() {
    console.log("ha");
    this.setState({ id: 5 });
  }

  render() {
    var course = this.props.history.location.search;
    console.log("its properties are in button for faculyt" + course.substr(1));
    var courseId = course.substr(1);
    return (
      <div>
        <TitleBar />
        <div>
          <h2>Create notification</h2>
          <input
            type="button"
            class="button1"
            value="Extra Class"
            onClick={this.handlClick1}
          />{" "}
          &nbsp;
          <input
            type="button"
            class="button1"
            value="Cancel Class"
            onClick={this.handleClick2}
          />{" "}
          &nbsp;
          <input
            type="button"
            class="button1"
            value="Others"
            onClick={this.handleClick3}
          />{" "}
          <hr />
          &nbsp;
          <input
            type="button"
            class="button1"
            value="Add Course Material"
            onClick={this.handleClick4}
          />{" "}
          &nbsp;
          <a href={"http://cms-bits.herokuapp.com/notification?" + courseId}>
            <input
              type="button"
              class="button1"
              value="See All Notifications"
              onClick={this.handleClick5}
            />
          </a>{" "}
          <a href={"http://cms-bits.herokuapp.com/uploadmarks"}>
            <input
              type="button"
              class="button1"
              value="Upload marks"
              onClick={this.handleClick5}
            />
          </a>
          <a href={"http://cms-bits.herokuapp.com/viewmarks"}>
            <input
              type="button"
              class="button1"
              value="View marks"
              onClick={this.handleClick5}
            />
          </a>
          <a
            href={
              "http://cms-bits.herokuapp.com/facultyperformanceanalysis/?" +
              courseId
            }
          >
            <input
              type="button"
              class="button1"
              value="View Performance analysis"
              onClick={this.handleClick5}
            />
          </a>
          &nbsp;
        </div>

        {/*<li><a href='#'><span>Add Course Material</span></a></li>
                    <li class='last'><a href='#'><span>Show Course Material</span></a></li>
                    <li class='last'><a href='#'><span>Add Marks</span></a></li>
        <li class='last'><a href='#'><span>Show Marks</span></a></li>*/}

        {this.state.id == 1 ? (
          <div style={{ width: "1200px" }}>
            <PostNotificationExtraClass courseId={courseId} />
          </div>
        ) : (
          ""
        )}
        {this.state.id == 2 ? (
          <PostNotificationCancelClass courseId={courseId} />
        ) : (
          ""
        )}
        {this.state.id == 3 ? (
          <OthersPostNotification courseId={courseId} />
        ) : (
          ""
        )}
        {this.state.id == 4 ? <UploadCourseMaterial courseId={courseId} /> : ""}
        {/* <GetNotifications /> */}
        <div style={{ float: "right" }}>
          <StickyNotes />
        </div>
      </div>
    );
  }
}

export default ButtonsForFaculty;
