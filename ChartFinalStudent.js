import React, { Component } from "react";
import Calculations from "./FacultyGraphCalculations.js";
import StudentPerformanceGraph from "./StudentPerformanceGraph.js";

class ChartFinalStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var course = this.props.history.location.search;
    console.log("its properties are " + course.substr(1));
    var courseId = course.substr(1);
    return (
      <div>
        <StudentPerformanceGraph app={this.state.app} courseId={courseId} />
        <Calculations
          calculation={this.state.calculation}
          courseId={courseId}
        />
      </div>
    );
  }
}

export default ChartFinalStudent;
