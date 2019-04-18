import React, { Component } from "react";
import "./App.css";
import MiniNotificationTab from "./MiniNotificationTab";
var axios = require("axios");
// import MiniNotificationTab from "./MiniNotificationTab.js";

class AllMiniNotificationTab extends Component {
  constructor(props) {
    super(props);
    this.state = { courses: [] };
  }
  componentDidMount() {
    axios
      .get(
        "http://nameless-shelf-39498.herokuapp.com/home/?studentId=2017A7PS0187H"
      )
      .then(res => {
        console.log("res " + JSON.stringify(res.data));
        this.setState({ courses: res.data });
      });
  }
  render() {
    var mininotificationtab = [];
    console.log("in render " + JSON.stringify(this.state.courses));
    var len = 0;
    if (!this.state.courses.length) len = 0;
    else len = this.state.courses.length;
    for (var i = 0; i < len; i++) {
      mininotificationtab.push(
        <div style={{ float: "left", padding: 15 }}>
          <MiniNotificationTab courseId={this.state.courses[i].courseName} />
          &nbsp;
        </div>
      );
    }
    console.log("now in render slength in render " + this.state.coursesId);
    return (
      <div
        style={{ float: "left", padding: 20, height: "200px", width: "1100px" }}
      >
        {mininotificationtab}
      </div>
    );
  }
}

export default AllMiniNotificationTab;
