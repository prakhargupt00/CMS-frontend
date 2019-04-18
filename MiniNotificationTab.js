import React, { Component } from "react";
import "./App.css";
import "./MiniNotificationTab.css";
var axios = require("axios");

class MiniNotificationTab extends Component {
  constructor(props) {
    super(props);
    this.state = { not1: "", not2: "", not3: "" };
  }
  componentDidMount() {
    console.log("props Id " + this.props.courseId);
    console.log("mounting component");
    var str =
      "http://nameless-shelf-39498.herokuapp.com/coursemininotifications/?courseId=" +
      this.props.courseId;
    axios.get(str).then(res => {
      console.log(
        "response is immediate " +
          JSON.stringify(res.data[0].notification) +
          " " +
          this.props.courseId
      );
      // this.setState({
      //   not1: JSON.stringify(res.data[0].notification[0].topic)
      // });
      // this.setState({
      //   not2: JSON.stringify(res.data[0].notification[0].topic)
      // });
      // this.setState({
      //   not3: JSON.stringify(res.data[0].notification[0].topic)
      // });
      var len = res.data[0].notification.length;
      console.log("len for vaibhav is " + len);
      if (len == 0) {
        this.setState({ not1: "No notifications available" });
      } else if (len == 1) {
        this.setState({ not1: "1. " + res.data[0].notification[0].topic });
      } else if (len == 2) {
        this.setState({
          not1: "1. " + res.data[0].notification[0].topic
        });
        this.setState({
          not2: "2. " + res.data[0].notification[1].topic
        });
      } else if (len >= 3) {
        this.setState({
          not1: "1. " + res.data[0].notification[len - 1].topic
        });
        this.setState({
          not2: "2. " + res.data[0].notification[len - 2].topic
        });
        this.setState({
          not3: "3. " + res.data[0].notification[len - 3].topic
        });
      }
    });
    console.log("done mounting");
    // console.log("curr sate " + JSON.stringify(this.state));
  }
  handleClick() {}
  render() {
    var courseId = this.props.courseId;
    return (
      <div className="box">
        {/* <input type="text" value={courseId} className="course-name" /> */}
        <span className="course-name">
          <a href={"http://cms-bits.herokuapp.com/course/?" + courseId}>
            {courseId}
          </a>
        </span>
        <p>{this.state.response}</p>
        <p className="nil-height" />
        <span>{this.state.not1}</span>
        <p />
        <span>{this.state.not2}</span>
        <p />
        <span>{this.state.not3}</span>
        <p />
      </div>
    );
  }
}

export default MiniNotificationTab;
