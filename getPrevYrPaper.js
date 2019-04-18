import React, { Component } from "react";
import "./App.css";
import StickyNotes from "./StickyFinal";
import TitleBar from "./TitleBar";
var axios = require("axios");

class GetPrevYrPaper extends Component {
  constructor(props) {
    super(props);
    this.state = { file: [] };
  }
  componentDidMount() {
    // console.log("course id " + this.props.courseId);
    var course = this.props.history.location.search;
    console.log("course id in getprevpaper " + course.substr(1));
    var courseId = course.substr(1);
    var str =
      "http://nameless-shelf-39498.herokuapp.com/getprevyrpaper/?courseId=" +
      courseId;
    axios.get(str).then(res => {
      console.log("lola");
      console.log(res.data);
      var len = res.data.length;
      console.log("leng is " + len);
      for (var i = 0; i < len; i++) {
        this.setState({ file: this.state.file.concat([res.data[i]]) });
      }
      console.log("final state is " + JSON.stringify(this.state.file));
    });
  }
  render() {
    var table = [];
    var len = this.state.file.length;
    if (this.state.file.length == 0) {
      console.log("nothing");
    } else {
      console.log(
        "len is " +
          len +
          "and " +
          JSON.stringify(this.state.file[0].file[0].fileName)
      );
    }
    for (var i = 0; i < len; i++)
      table.push(
        <tr style={{ padding: "100px" }}>
          <a href={this.state.file[0].file[0].fileLink}>
            {this.state.file[0].file[0].fileName}
          </a>
        </tr>
      );
    console.log("hello");
    //   console.log("wdqwddad"+JSON.stringify(table) +"safsaf");
    return (
      <div>
        <TitleBar />
        <div
          style={{
            paddingRight: "1000px",
            paddingBottom: "100px",
            color: "black"
          }}
        >
          <table>{table}</table>
        </div>
        <StickyNotes />
      </div>
    );
  }
}

export default GetPrevYrPaper;
