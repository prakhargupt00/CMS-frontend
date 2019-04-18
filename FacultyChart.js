/* App.js */
import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react.js";
import TitleBar from "./TitleBar.js";
import StickyNotes from "./StickyFinal.js";
var axios = require("axios");
//var React = require('react');
//var ReactDOM = require('react-dom');
//var Component = React.Component;
//var CanvasJSReact = require('./canvasjs.react.js');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class FacultyChart extends Component {
  constructor(props) {
    super(props);
    this.state = { marks: "", len: 0 };
  }
  componentDidMount() {
    var len = 1;
    axios
      .get(
        "http://nameless-shelf-39498.herokuapp.com/getmarks/?courseId=" +
          this.props.courseId
      )
      .then(res => {
        var len = res.data.student[0].studentMarks.length;
        this.setState({ marks: res.data, len: len });
        console.log("reswpone " + this.state.len);

        var data = [];
        for (var test = 0; test < len; test++) {
          var obj = {
            type: "line",
            name: res.data.student[0].studentMarks[test].testName,
            showInLegend: true,
            toolTipContent: "SId {x} : {y}"
          };
          // console.log(obj);
          var dataPoints = [];
          for (var i = 0; i < res.data.student.length; i++) {
            var coordinate = {
              x: i + 1,
              y: res.data.student[i].studentMarks[test].marks
            };
            dataPoints.push(coordinate);
          }
          obj.dataPoints = dataPoints;
          data.push(obj);
        }
        this.setState({ data: data });
        console.log("data object " + JSON.stringify(data));
      });
  }
  render() {
    console.log("our object" + JSON.stringify(this.state.data));
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      colorSet: "greenshades",
      theme: "dark2", // "light1", "dark1", "dark2"
      title: {
        fontColor: "yellow",
        text: "Performance Analysis of Class"
      },
      axisY: {
        title: "Marks",
        //includeZero: false,
        labelFontColor: "cyan",
        suffix: "%"
      },
      axisX: {
        title: "StudentId",
        labelFontColor: "cyan",
        prefix: "Id:",
        interval: 1
      },
      data: this.state.data
    };
    console.log("there obj " + JSON.stringify(options.data));
    return (
      <div>
        <TitleBar />
        <div>
          <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
          {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
        </div>
        <StickyNotes />
      </div>
    );
  }
}
//module.exports = App;
export default FacultyChart;
