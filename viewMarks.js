import React, { Component } from "react";
import axios from "axios";
import "./marks.css";
import StickyNotes from "./StickyFinal";
import TitleBar from "./TitleBar";

class ViewMark extends Component {
  state = {
    tell: false,
    courseName: "",
    course: {}
  };

  addName = courseName => {
    // console.log(courseName) ;
    axios
      .post("http://nameless-shelf-39498.herokuapp.com/api/getCourse", {
        cname: courseName
      })
      .then(res => {
        console.log(res.data);
        this.setState({ course: res.data.course });
        this.setState({ tell: true });
      });

    // alert(courseName);
  };

  // componentDidMount(){
  //   if (this.state.tell)
  //    this.markList();
  // }
  markList() {
    const { course } = this.state;
    // console.log("intermwenf");
    return (
      // <div>
      //   <p>hello</p>
      // </div>
      <div>
        <table className="ll">
          <thead>
            <th key="id" className="ll">
              StudentId
            </th>
            {course.student[0].studentMarks.map((test, index) => (
              <th className="ll" key={"STU" + index}>
                {test.testName}
              </th>
            ))}
          </thead>
          <tbody>
            {course.student.map((student, index) => (
              <tr key={student.studentId}>
                <td className="ll">
                  {" "}
                  <b>{student.studentId} </b>
                </td>
                {student.studentMarks.map((test, i) => (
                  <td className="ll" key={"test" + i}>
                    <b>{test.marks}</b>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    if (this.state.tell) {
      return (
        <div>
          <TitleBar />
          <div className="container few ">
            <div className="fir input-group ">
              <h2 className="buu">Enter course Name</h2>
              <input
                className="form-control  buu"
                type="text"
                onChange={e => {
                  this.setState({ courseName: e.target.value });
                  // console.log(this.state.course.courseName);
                }}
              />
              <button
                className="btn btn-warning buu"
                onClick={() => this.addName(this.state.courseName)}
              >
                ok
              </button>
            </div>
            {this.markList()}
          </div>
          <StickyNotes />
        </div>
      );
    } else {
      return (
        <div>
          <TitleBar />
          <div className="container few ">
            <div className="fir input-group ">
              <h2 className="buu">Enter course Name</h2>
              <input
                className="form-control  buu"
                type="text"
                onChange={e => {
                  this.setState({ courseName: e.target.value });
                  // console.log(this.state.course.courseName);
                }}
              />
              <button
                className="btn btn-warning buu"
                onClick={() => this.addName(this.state.courseName)}
              >
                ok
              </button>
            </div>
          </div>
          {/* <StickyNotes /> */}
        </div>
      );
    }
  }
}

export default ViewMark;
