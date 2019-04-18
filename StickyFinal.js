import React, { Component } from "react";
import Cookies from "universal-cookie";
var cookies = new Cookies();
var axios = require("axios");

class StickyNotes extends Component {
  constructor(props) {
    super(props);
    this.state = { studentId: "", content: "" };
  }

  componentDidMount() {
    var userId = cookies.get("username");
    // axios.get("http://nameless-shelf-39498.herokuapp.com/getuserid").then(res => {
    //   console.log("user id is " + JSON.stringify(res.data));
    //   userId = res.data;
    // });
    axios
      .get(
        "http://nameless-shelf-39498.herokuapp.com/getcontent/?studentId=" +
          userId
      )
      .then(res => {
        this.setState({
          content: res.data.content,
          studentId: res.data.studentId
        });
        console.log("state: " + this.state.content);
      });
    console.log("component mounted" + this.state.content);
    // axios.post('http://nameless-shelf-39498.herokuapp.com/addnote/?studentId=1', {content: this.state.content});
  }
  // componentWillUnmount()
  // {
  //         let studentId = this.state.studentId;
  //         let content =this.state.content;
  //         console.log("shudiuashidsahdo;ijas"+content);

  //     axios.post("http://nameless-shelf-39498.herokuapp.com/addnote/?studentId=1", {
  //         content:content

  //       });
  // }

  onChange(e) {
    this.setState({ content: e.target.value });
    var studentId = this.state.studentId;
    console.log("content in react " + this.state.content);
    console.log("username for vednat " + cookies.get("username"));
    axios.post(
      "http://nameless-shelf-39498.herokuapp.com/addnote/?studentId=" +
        cookies.get("username"),
      {
        content: this.state.content
      }
    );
  }
  // onClick
  // {

  // }
  render() {
    console.log("statecontent " + this.state.content);
    var str = this.state.content;
    return (
      <div>
        <textarea
          cols="24"
          value={this.state.content}
          onChange={this.onChange.bind(this)}
          rows="6"
          name="content"
          style={{
            backgroundColor: "#1EF98B",
            borderRadius: "10px",
            fontSize: "30px",
            margin: "30px",
            marginBottom: "10px"
          }}
        />
        {/* <input type="text" value={this.state.inputVal} onChange={(e) => {this.setState({inputVal: e.target.value})}} onChange={(e) => {this.setState({content: e.target.value})}}/> */}
      </div>
    );
  }
}
export default StickyNotes;
