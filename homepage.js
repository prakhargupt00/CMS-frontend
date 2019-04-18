import React, { Component } from "react";
import "./App.css";
import AllMiniNotificationTab from "./allmininotificationtab.js";
import NotificationTab from "./CollegeNotificationBox.js";
import TitleBar from "./TitleBar.js";
import StickyNotes from "./StickyFinal";
var axios = require("axios");

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <TitleBar />
        </div>
        <div>
          <NotificationTab />
        </div>
        <div>
          <AllMiniNotificationTab />
        </div>
        <div style={{ float: "right" }}>
          <StickyNotes />
        </div>
      </div>
    );
  }
}
export default HomePage;
