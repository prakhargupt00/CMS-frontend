/* App.js */
import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react.js";
import Calculations from "./FacultyGraphCalculations.js";
import Cookies from "universal-cookie";
import TitleBar from "./TitleBar.js";
import StickyNotes from "./StickyFinal.js";
var cookies = new Cookies();
//var React = require('react');
//var ReactDOM = require('react-dom');
//var Component = React.Component;
//var CanvasJSReact = require('./canvasjs.react.js');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var axios = require("axios");
class StudentPerformanceGraph extends Component {
  constructor(props) {
    super(props);
    this.state = { marks: "", len: 0, data: [] };
  }
  componentDidMount() {
    var len = 1;
    var course = this.props.history.location.search;
    console.log("its properties are " + course.substr(1));
    var courseId = course.substr(1);
    var str =
      "http://nameless-shelf-39498.herokuapp.com/getmarks/?courseId=" +
      courseId;
    console.log("link to be sent " + str);
    axios.get(str).then(res => {
      var studentId = cookies.get("username");
      console.log("student id is " + studentId);
      console.log("response from server " + JSON.stringify(res.data));
      var index = 0;
      for (var i = 0; i < res.data.student.length; i++) {
        if (res.data.student[i].studentId == studentId) {
          index = i;
        }
      }
      console.log("index for vedant " + index);
      var len = res.data.student[0].studentMarks.length;
      this.setState({ marks: res.data, len: len, data: [] });
      console.log("reswponsssse " + this.state.len);

      var data = [];

      //for (var st=0;st<len;st++)
      //{s
      var obj = {
        type: "line",
        name: "My Marks",
        showInLegend: true,
        toolTipContent: "SId {x} : {y}"
      };
      // console.log(obj);
      var dataPoints = [];
      for (var i = 0; i < res.data.student[0].studentMarks.length; i++) {
        var coordinate = {
          x: i + 1 /*res.data.student[0].studentMarks[i].testName*/,
          y: res.data.student[0].studentMarks[i].marks
        };
        dataPoints.push(coordinate);
      }
      obj.dataPoints = dataPoints;
      data.push(obj);
      //}

      var obj = {
        type: "line",
        name: "Average Marks",
        showInLegend: true,
        toolTipContent: "SId {x} : {y}"
      };
      // console.log(obj);
      var dataPoints = [];
      var sum = 0;
      var avg = 0;
      var l = res.data.student.length;
      for (var i = 0; i < len; i++) {
        sum = 0;
        //console.log("knklength"+len);
        for (var j = 0; j < l; j++) {
          console.log(
            "JSOn 12 " +
              JSON.stringify(res.data.student[j].studentMarks[i].marks)
          );
          sum += res.data.student[j].studentMarks[i].marks;
        }
        avg = sum / len;
        var coordinate = { x: i + 1, y: avg };
        dataPoints.push(coordinate);
      }
      obj.dataPoints = dataPoints;
      data.push(obj);

      this.setState({ data: data });
      console.log("final object array " + JSON.stringify(data));
    });
  }
  render() {
    console.log("our object in render" + JSON.stringify(this.state.themedata));
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "dark2", // "light1", "dark1", "dark2"
      colorSet: "greenshades",
      title: {
        fontColor: "yellow",
        text: "My Performance"
      },
      axisY: {
        title: "Marks",
        labelFontColor: "cyan",
        //includeZero: false,
        suffix: "%"
      },
      axisX: {
        title: "Test Name",
        //titleFontColor: "magenta",
        labelFontColor: "cyan",
        prefix: "Test:",
        interval: 1
      },
      data: this.state.data
    };
    console.log("there obj " + JSON.stringify(options.data));
    var course = this.props.history.location.search;
    // console.log("its properties are " + course.substr(1));
    var courseId = course.substr(1);
    return (
      <div>
        <TitleBar />
        <span style={{ textAlign: "center" }}>
          <h3> Performance for Course {courseId}</h3>
        </span>
        <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
        {/* <div> */}
        <Calculations
          calculation={this.state.calculation}
          courseId={courseId}
        />

        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}
//module.exports = App;
export default StudentPerformanceGraph;
