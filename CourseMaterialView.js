import React, { Component } from "react";
import "./App.css";
var axios = require("axios");

class CourseMaterialView extends Component {
  constructor(props) {
    super(props);
    this.state = { file: [] };
  }
  componentDidMount() {
    // console.log("course id " + this.props.courseId);
    var str =
      "http://nameless-shelf-39498.herokuapp.com/coursecontent/?courseId=" +
      this.props.courseId;
    axios.get(str).then(res => {
      console.log("response " + JSON.stringify(res.data[0].file.length));
      var len = res.data[0].file.length;
      this.setState({ file: this.state.file.concat(res.data[0].file) });
      for (var i = 0; i < len; i++) {
        console.log(this.state.file[i].fileLink);
      }
    });
  }
  render() {
    var table = [];
    var len = this.state.file.length;
    for (var i = 0; i < len; i++)
      table.push(
        <tr style={{ padding: "100px", margin: "100px" }}>
          <a className="course-material-box" href={this.state.file[i].fileLink}>
            {this.state.file[i].fileName}
          </a>
        </tr>
      );
    return (
      <div
        style={{
          paddingRight: "1000px",
          paddingBottom: "100px",
          width: "1000px"
        }}
      >
        <table style={{ padding: "100px", width: "1000px" }}>{table}</table>
      </div>
    );
  }
}

export default CourseMaterialView;
