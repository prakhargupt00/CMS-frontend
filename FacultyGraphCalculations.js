/* App.js */
import React, { Component } from "react";
import "./table.css";
var axios = require("axios");

class Calculations extends Component {
  constructor(props) {
    super(props);
    this.state = { marks: "", len: 0, data: [] };
  }
  componentDidMount() {
    var len = 1;
    axios
      .get(
        "http://nameless-shelf-39498.herokuapp.com/getmarks/?courseId=" +
          this.props.courseId
      )
      .then(res => {
        console.log(
          "response from vdant " + res.data.student[0].studentMarks.length
        );
        var len = res.data.student[0].studentMarks.length;
        var data = [];
        this.setState({ marks: res.data, len: len, data: [] });
        console.log("reswpone " + this.state.len);

        for (var test = 0; test < len; test++) {
          var obj = { name: res.data.student[0].studentMarks[test].testName };

          // console.log(obj);
          //var dataPoints = [];
          var sum = 0;
          var avg = 0;
          var num = 0;
          var min = res.data.student[0].studentMarks[test].marks;
          var max = res.data.student[0].studentMarks[test].marks;
          for (var i = 0; i < res.data.student.length; i++) {
            if (res.data.student[i].studentMarks[test].marks) {
              sum += res.data.student[i].studentMarks[test].marks;
              num++;

              if (res.data.student[i].studentMarks[test].marks < min)
                min = res.data.student[i].studentMarks[test].marks;

              if (res.data.student[i].studentMarks[test].marks > max)
                max = res.data.student[i].studentMarks[test].marks;
            }
          }
          avg = sum / num;
          obj.avg = avg;
          obj.min = min;
          obj.max = max;
          data.push(obj);
        }
        this.setState({ data: data });
        //this.setState({marks: res.data, len: len, data: data});
        console.log("data object " + JSON.stringify(data));
      });
  }
  render() {
    var data = this.state.data;
    console.log("our object" + JSON.stringify(data));
    ///var final = data.avg;
    //console.log("there obj " + JSON.stringify(options.data));
    // {data.map(data => <div>{this.data.avg}
    ///const listItems = data.map((d) => key={data.avg});
    //var items=
    return (
      <div>
        <div class="Table">
          <div class="Title">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Course
              Statistics&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
          </div>
          <div class="Heading">
            <div class="Cell">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; Test Name
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
            </div>
            <div class="Cell">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Average&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
            </div>
            <div class="Cell">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Minimum&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
            </div>
            <div class="Cell">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maximum&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
            </div>
          </div>
          <div class="Row">
            <div class="Cell">
              <p>
                {data.map(function(d, idx) {
                  return <li key={idx}>{d.name}</li>;
                })}
              </p>
            </div>
            <div class="Cell">
              <p>
                {data.map(function(d, idx) {
                  return <li key={idx}>{d.avg} </li>;
                })}
              </p>
            </div>
            <div class="Cell">
              <p>
                {data.map(function(d, idx) {
                  return <li key={idx}>{d.min} </li>;
                })}
              </p>
            </div>
            <div class="Cell">
              <p>
                {data.map(function(d, idx) {
                  return <li key={idx}>{d.max} </li>;
                })}
              </p>
            </div>
          </div>
          {/* <div class="Row">
						<div class="Cell">
								<p>
								{data.map(function(d, idx){
								return (<li key={idx}>{d.avg} </li>)
								})}	
								</p>
						</div>
				</div> */}
        </div>
      </div>
    );

    // <div>
    // 	<p><b>Test:</b> {data.map(function(d, idx){
    //    return (<li key={idx}>{d.name}</li>)
    //  })}</p>

    // <p><b>Average:</b> </p>{data.map(function(d, idx){
    //    return (<li key={idx}>{d.avg}</li>)
    //  })}

    //           <p><b>Minimum: </b></p>{data.map(function(d, idx){
    //    return (<li key={idx}>{d.min}</li>)
    //  })}

    //         <p><b>Maximum:</b> </p>{data.map(function(d, idx){
    //    return (<li key={idx}>{d.max}</li>)
    //  })}
    // </div>
    // );
  }
}
export default Calculations;
