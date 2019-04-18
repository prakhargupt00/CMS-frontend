import React, { Component } from "react";

import "./App.css";

class TopicText extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.action(e.target.value);
  }
  render() {
    return (
      <span>
        {" "}
        <span style={{ color: "grey", fontSize: "20px", padding: "9px" }}>
          Topic&nbsp;:
        </span>
        <span style={{ color: "black" }}>
          <textarea rows="1" cols="60" onChange={this.handleChange}>
            {this.props.topic}
          </textarea>
          <br />{" "}
        </span>
      </span>
    );
  }
}

export default TopicText;
