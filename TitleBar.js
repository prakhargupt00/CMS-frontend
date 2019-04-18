import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Cookies from "universal-cookie";
import "./BITS.png";
import "./logoutbutton.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from "mdbreact";
var cookies = new Cookies();

class TitleBar extends Component {
  state = {
    isOpen: false
  };
  logoutFunc = () => {
    alert("logged out");
  };
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    var desig = cookies.get("designation");
    var homestr;
    if (desig == "student") {
      homestr = "http://cms-bits.herokuapp.com/home";
    } else if (desig == "faculty") {
      homestr = "http://cms-bits.herokuapp.com/facultyhome";
    }
    return (
      <div>
        <MDBNavbar color="default-color" dark expand="md">
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <img
              src={require("./BITS.png")}
              class="img-fluid"
              alt="Bits img"
              height="42"
              width="42"
            />
            <MDBNavbarBrand>
              <a href={homestr}>
                <strong className="white-text">Course Management System</strong>
              </a>
            </MDBNavbarBrand>
            <MDBNavbarNav left>
              {/* <a href="/home">
                <input
                  type="button"
                  href="/home"
                  // onClick={this.state.logoutFunc}
                  value="Home"
                  class="logout"
                />
              </a> */}
              {/* <MDBNavItem active>
                <MDBNavLink to="#!">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Help</MDBNavLink>
              </MDBNavItem> */}
              {/* <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline">Dropdown</div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default" right>
                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem> */}
            </MDBNavbarNav>
            <MDBNavbarBrand>
              <strong className="white-text">
                {"Hello " + cookies.get("username")}
              </strong>
            </MDBNavbarBrand>
            <MDBNavbarNav right>
              <input
                type="button"
                href="#ff!"
                //onClick={this.state.logoutFunc}
                value="Logout"
                class="logout"
              />

              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default" right>
                    <MDBDropdownItem href="/profile">Profile</MDBDropdownItem>
                    <MDBDropdownItem href="#!">My Account</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
    );
  }
}

export default TitleBar;
