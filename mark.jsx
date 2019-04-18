import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./marks.css";
// import Cookies from 'universal-cookie' ;
// const cookies = new Cookies() ;

class Mark extends Component {
  state = {
    s: true,
    testName: "",
    course: {
      courseName: "",
      student: [
        // { id: 1, marks: [5, 10] },
        // { id: 2, marks: [9, 10] },
        // { id: 3, marks: [15, 10] }
      ]
    }
  };

  componentWillMount() {
    // this.renderMarks();
  }

  addName = courName => {
    // fetch("http://localhost:3001/api/getCourse", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     cname: { courName } //note here not state. chck
    //   })
    // })
    //   .then(course => course.json())
    //   .then(res => this.setState({ course: res.course }));
    // .then(res => res.text()) // convert to plain text
    // .then(text => console.log(text));

    axios
      .post("http://nameless-shelf-39498.herokuapp.com/api/getCourse", {
        cname: courName
      })
      .then(res => {
        console.log(res.data);
        this.setState({ course: res.data.course });
      });
    this.setState({ s: false });
    // alert(courName);
  };

  addMarks = course => {
    for (var i = 0; i < course.student.length; i++) {
      this.handleValue(i);
    }
    this.setState({ course: this.state.course });
    console.log(course);

    axios.post("http://nameless-shelf-39498.herokuapp.com/api/putMarks", {
      course: course
    });
    console.log("marks added successfully in the database");
  };

  handleValue = e => {
    // const student = [...this.state.course.student];
    // student.push(value);
    // this.setState({ student: student }); //check here course.studets
    var ind = e;
    var course = this.state.course;
    var c = "stu" + ind;

    // console.log(document.getElementById(c).value);
    course.student[ind].studentMarks.push({
      testName: this.state.testName,
      marks: Number(document.getElementById(c).value)
    });
    this.setState({ course });
    // console.log(this.state.course);
  };

  renderMarks() {
    return (
      <table className="buu ll">
        {/* <li> studentID : Marks </li> */}
        <thead>
          <tr>
            <th className="ll">studentID</th>
            <th className="ll">Marks</th>
            {/* <th>verify</th> */}
          </tr>
        </thead>
        <tbody>
          {this.state.course.student.map((student, index) => (
            <tr key={student.studentId}>
              <td className="ll">
                {" "}
                <b>{student.studentId} : </b>
              </td>
              <td className="ll">
                <input type="text" id={"stu" + index} className="buu " />
              </td>
              {/* <td> <button
              className="btn btn-primary buu"
              id={"mark-but" + index}
              onClick={e => this.handleValue(e)}
            >
              ok
            </button></td> */}
              {/* {console.log("stu"+index)} */}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    const { course } = this.state;
    // cookies.set('myCat', 'Pacman', { path: '/' }) ;
    // console.log(cookies.get('myCat')) ;

    return (
      <div className="container few ">
        <div className="fir input-group ">
          <h2 className="buu">Course Name</h2>
          <input
            className="form-control  buu"
            type="text"
            onChange={e => {
              var c = course;
              c.courseName = e.target.value;
              this.setState({ course: c });
              // console.log(this.state.course.courseName);
            }} //here also check
          />
          <button
            className="btn btn-warning buu"
            onClick={() => this.addName(course.courseName)}
          >
            ok
          </button>
        </div>

        <div className="fir input-group ">
          <h2 className="buu">Test Name </h2>
          <input
            className="form-control  buu"
            type="text"
            onChange={e => {
              this.state.testName = e.target.value;
              // var c = course;
              // c.courseName = e.target.value;
              // this.setState({ course: c });
              // console.log(this.state.course.courseName);
            }} //here also check
          />
        </div>

        <div className="input-group  buu ">
          <h2 className="buu ">Enter marks</h2>
          <button
            className="buu btn btn-success "
            disabled={this.state.s}
            onClick={() => this.addMarks(course)}
          >
            submit
          </button>
        </div>
        {this.renderMarks()}
      </div>
    );
  }
}

export default Mark;
