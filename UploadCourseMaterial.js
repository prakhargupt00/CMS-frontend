import React, { Component } from "react";
import axios from "axios";

import "./App.css";
//import App from './App.js';
//import './PostNotification.css';
import FileNameClass from "./FileNameClass.js";
import FileLinkClass from "./FileLinkClass.js";
import "./ePostNotificationExtraClass.css";

class UploadCourseMaterial extends Component {
  constructor(props) {
    super(props);

    this.state = { fileName: "", fileLink: "" };

    this.changeFileLink = this.changeFileLink.bind(this);
    this.changeFileName = this.changeFileName.bind(this);
  }
  changeFileLink(e) {
    //console.lo
    console.log("filelink:" + e);
    this.setState({ fileLink: e });
  }
  changeFileName(e) {
    console.log("fileName:" + e);
    this.setState({ fileName: e });
  }

  putDataToDB = message => {
    let fileName = this.state.fileName;
    let fileLink = this.state.fileLink;
    let course = this.props.courseId;
    console.log("hokos" + fileName);
    console.log("asad" + fileLink);

    axios.post(
      "http://nameless-shelf-39498.herokuapp.com/uploadcoursematerial",
      {
        courseId: course,
        fileName: fileName,
        fileLink: fileLink
      }
    );
  };

  render() {
    return (
      <div className="PostNotification">
        <header
          className="PostNotification-header"
          style={{ backgroundColor: "white" }}
        >
          <span style={{ color: "red" }}>
            <h2>Upload Course Material</h2>
          </span>

          <FileNameClass action={this.changeFileName} />
          <FileLinkClass action={this.changeFileLink} />

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

export default UploadCourseMaterial;
