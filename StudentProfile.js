// /client/StudentProfile.js
import React, { Component } from "react";
import axios from "axios";
import "./label.css";
import Cookies from "universal-cookie";
var cookies = new Cookies();

//import { Button } from "react-bootstrap";
class StudentProfile extends Component {
  // initialize our state
  state = {
    data: [],
    length: [],
    length1: 0,
    id: "weqw",
    message: null,
    /*---- */
    name: null,
    age: 0,
    contact: 0,
    emailId: null,
    password: null,
    /*----*/
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    idToGet: 8,
    objectToUpdate: null,
    dat2: 123
  };

  componentDidMount() {
    console.log("mounting component");
    axios.get("http://nameless-shelf-39498.herokuapp.com/getData").then(res => {
      console.log("here it isr" + res);
      var length = [];
      var i = 0;
      console.log("papa" + res.data.length);
      for (i = 0; i < res.data.length; i++) {
        length.push(i);
      }
      console.log("haha" + length);
      this.setState({
        length: length,
        length1: res.length,
        data: res.data
      });
      const { data } = this.state;
      // console.log(data);
      console.log("In Mounr" + JSON.stringify(data));
      //console.log("length array:" + this.state.length);
      var index = 0;
      var obj = null;
      for (var i = 0; i < data.length; i++) {
        console.log("hello");
        if (data[i].id == cookies.get("username")) {
          //give id here-------------------------
          //Give id here
          index = i;
        }
      }
      console.log("Index is" + index);
      obj = data[index];
      if (!obj) {
        console.log("Obj not there");
      } else {
        console.log("Obj iso" + JSON.stringify(obj.id));
        this.setState({
          id: obj.id,
          message: obj.message,
          name: obj.name,
          age: obj.age,
          contact: obj.contact,
          emailId: obj.emailId,
          password: obj.password
        });
        console.log("Id" + this.state.id);
        console.log("msg" + this.state.message);
      }
    });
    /* */
  }

  putDataToDB = (message, name, age, contact, emailId, password) => {
    let idToBeAdded = this.state.id;

    axios.post("http://nameless-shelf-39498.herokuapp.com/putData", {
      id: idToBeAdded,
      message: message,
      name: name,
      age: age,
      contact: contact,
      emailId: emailId,
      password: password
    });
  };

  // our delete method that uses our backend api
  // to remove existing database information
  deleteFromDB = idTodelete => {
    let objIdToDelete = null;
    this.state.data.forEach(dat => {
      if (dat.id == idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete("http://nameless-shelf-39498.herokuapp.com/deleteData", {
      data: {
        id: objIdToDelete
      }
    });
  };

  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (
    idToUpdate,
    updateToApply,
    name,
    age,
    contact,
    emailId,
    password
  ) => {
    let objIdToUpdate = null;
    console.log("Id to be updated is", idToUpdate);
    console.log("mama" + this.state.length);
    this.state.length.forEach(dat => {
      if (this.state.data[dat].id == idToUpdate) {
        objIdToUpdate = this.state.data[dat]._id;
      }
    });
    console.log("Name log" + name);
    console.log("Object Id to be updated is", objIdToUpdate);
    axios.post("http://nameless-shelf-39498.herokuapp.com/updateData", {
      id: idToUpdate,

      message: updateToApply,
      name: name,
      age: age,
      contact: contact,
      emailId: emailId,
      password: password
    });
  };
  onChangeId(e) {
    this.setState({ id: e.target.value });
  }
  onChangeMessage(e) {
    this.setState({ message: e.target.value });
  }
  onChangeName(e) {
    this.setState({ name: e.target.value });
  }
  onChangeAge(e) {
    this.setState({ age: e.target.value });
  }
  onChangeContact(e) {
    this.setState({ contact: e.target.value });
  }
  onChangeEmailId(e) {
    this.setState({ emailId: e.target.value });
  }
  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }
  // onChangeId(e){
  //   this.setState({id:e.target.value})
  // }
  render() {
    //const { data } = this.state;
    // console.log(data);
    //console.log(data);
    //console.log("length array:" + this.state.length);
    // var index = 0;
    // var obj = null;
    // for (var i = 0; i < data.length; i++) {
    //   console.log("hello");
    //   if (data[i].id == "8") {
    //     index = i;
    //   }
    // }
    // console.log("Index is" + index);
    // obj = data[index];
    // if (!obj) {
    //   console.log("Obj not there");
    //   return <div />;
    // } else {
    //   console.log("Obj iso" + JSON.stringify(obj.id));
    //   //this.setState({ id: obj.id, message: obj.message });
    //   console.log("Id" + this.state.id);
    //   console.log("msg" + this.state.message);
    const { data } = this.state;
    return (
      <div>
        <div>
          {/* <input
            type="text"
            style={{ width: "400px" }}
            onChange={e => this.setState({ idToGet: e.target.value })}
            placeholder="put value of the id to get here"
          /> */}
        </div>

        <h2 className="demo2">Update Your Profile</h2>

        <div style={{ padding: "10px" }}>
          <input
            //type="text"
            className="dhruvinput"
            style={{ width: "400px" }}
            onChange={this.onChangeId.bind(this)}
            value={this.state.id}
            placeholder="id of item to update here"
          />
          <br />
          <input
            //type="text"
            className="dhruvinput"
            onChange={this.onChangeMessage.bind(this)}
            // value={data[this.state.dat2].message}
            placeholder="Message"
            value={this.state.message}
            style={{ width: "400px" }}
          />
          <br />
          {/*---------------------*/}
          <input
            //type="text"
            className="dhruvinput"
            onChange={this.onChangeName.bind(this)}
            placeholder="Name"
            value={this.state.name}
            style={{ width: "400px" }}
          />
          <br />
          <input
            //type="text"
            className="dhruvinput"
            onChange={this.onChangeAge.bind(this)}
            placeholder="Age"
            value={this.state.age}
            style={{ width: "400px" }}
          />
          <br />
          <input
            //type="text"
            className="dhruvinput"
            onChange={this.onChangeContact.bind(this)}
            placeholder="Contact"
            value={this.state.contact}
            style={{ width: "400px" }}
          />
          <br />
          <input
            //type="text"
            className="dhruvinput"
            onChange={this.onChangeEmailId.bind(this)}
            placeholder="emailId"
            value={this.state.emailId}
            style={{ width: "400px" }}
          />
          <br />
          <input
            //type="text"
            className="dhruvinput"
            onChange={this.onChangePassword.bind(this)}
            placeholder="Password"
            value={this.state.password}
            style={{ width: "400px" }}
          />
          <br />
        </div>

        <div style={{ padding: "10px" }}>
          {/*<input
            type="text"
            style={{ width: "400px" }}
            onChange={e => this.setState({ updateToApply: e.target.value })}
            placeholder="put new value of the item here"
          />*/}
          <br />
          <button
            class="button button2"
            onClick={() =>
              this.updateDB(
                this.state.id /*Give the Id here*/,
                this.state.message,
                this.state.name,
                this.state.age,
                this.state.contact,
                this.state.emailId,
                this.state.password
              )
            }
          >
            UPDATE
          </button>
        </div>
      </div>
    );
    //}
  }
}

export default StudentProfile;
