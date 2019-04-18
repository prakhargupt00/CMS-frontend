import React, { Component } from "react";
import "./App.css";
import "./CollegeNotificationBox.css";
var axios = require("axios");

class NotificationTab extends Component {
  constructor(props) {
    super(props);
    this.state = { not1: "" };
  }
  componentDidMount() {
    console.log("mounting collegenotification component");
    axios
      .get("http://nameless-shelf-39498.herokuapp.com/getEvent")
      .then(res => {
        console.log("from notificatoin tab " + res.data);
        // this.setState({
        //   not1: JSON.stringify(res.data[0].topic)
        // });
        // this.setState({
        //   not2: JSON.stringify(res.data[0].topic)
        // });
        // this.setState({
        //   not3: JSON.stringify(res.data[0].topic)
        // });
        var len = res.data.length;
        console.log("length for ashish is " + len);
        if (len == 0) {
          this.setState({
            not1: "No new notifications"
          });
        } else if (len == 1) {
          this.setState({
            not1: "1. " + res.data[0].topic
          });
        } else if (len == 2) {
          this.setState({
            not1: "1. " + res.data[0].topic
          });
          this.setState({
            not2: "2. " + res.data[1].topic
          });
        } else if (len >= 3) {
          this.setState({
            not1: "1." + res.data[len - 1].topic
          });
          this.setState({
            not2: "2. " + res.data[len - 2].topic
          });
          this.setState({
            not3: "3. " + res.data[len - 3].topic
          });
        }
      });
    console.log("done collegenotiication mounting");
    // console.log("curr sate " + JSON.stringify(this.state));
  }
  render() {
    // s
    return (
      <div className="box1" style={{ paddingBottom: "20px" }}>
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

export default NotificationTab;
