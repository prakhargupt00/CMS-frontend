import React, { Component } from "react";
import axios from "axios";

import "./App.css";
//import App from './App.js';
//import './PostNotification.css';
import FileNameClass from "./FileNameClass.js";
import FileLinkClass from "./FileLinkClass.js";
import "./ePostNotificationExtraClass.css";

class PostPreviousYearPaper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileName: "",
      fileLink: "",
      Year: "",
      sem: " ",
      courseId: " "
    };

    this.changeFileLink = this.changeFileLink.bind(this);
    this.changeFileName = this.changeFileName.bind(this);
    this.changeYear = this.changeYear.bind(this);
    this.changeSem = this.changeSem.bind(this);
    this.changeCourseId = this.changeCourseId.bind(this);
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
  changeCourseId(e) {
    console.log("courseId:" + e.target.value);
    this.setState({ courseId: e.target.value });
  }
  changeSem(e) {
    console.log("sem:" + e.target.value);
    this.setState({ sem: e.target.value });
  }
  changeYear(e) {
    console.log("year:" + e.target.value);
    this.setState({ year: e.target.value });
  }

  putDataToDB = message => {
    let fileName = this.state.fileName;
    let fileLink = this.state.fileLink;
    let course = this.state.courseId;
    let year = this.state.year;
    let sem = this.state.sem;
    console.log("hokos" + fileName);
    console.log("asad" + fileLink);

    axios.post(
      "http://nameless-shelf-39498.herokuapp.com/postpreviousyearpaper",
      {
        courseId: course,
        fileName: fileName,
        fileLink: fileLink,
        year: year,
        sem: sem
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
            <h2>Post Previous year paper</h2>
          </span>

          <FileNameClass action={this.changeFileName} />
          <FileLinkClass action={this.changeFileLink} />
          <span style={{ color: "grey" }}>
            Enter Year:
            <span style={{ color: "red" }}>
              {" "}
              <input type="text" name="year" onChange={this.changeYear} />
              <br />
            </span>{" "}
          </span>

          <span style={{ color: "grey" }}>
            Enter Sem:
            <span style={{ color: "red" }}>
              {" "}
              <input type="test" name="sem" onChange={this.changeSem} />
              <br />
            </span>{" "}
          </span>

          <span style={{ color: "grey" }}>
            Enter CourseId:
            <span style={{ color: "red" }}>
              {" "}
              <input
                type="text"
                name="courseId"
                onChange={this.changeCourseId}
              />
              <br />
            </span>{" "}
          </span>

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

export default PostPreviousYearPaper;
