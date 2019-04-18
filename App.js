import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
// import { browserHistory } from "react-router";
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

import Login from "./login.js"; //prakhar

// import TitleBar from "./TitleBar.js"; //dhruv
// import "./BITS.png";
// import "./logoutbutton.css";

import NotificationTab from "./CollegeNotificationBox.js";

import HomePage from "./homepage.js";
import CoursePage from "./coursepage.js";
import ChartFinal from "./FacultyPerformanceGraph";
import TitleBar from "./TitleBar.js";
import StudentPerformanceGraph from "./StudentPerformanceGraph.js";
import StudentProfile from "./StudentProfile.js";
import ButtonsForFaculty from "./ButtonsForFaculty.js";
import AddFacultyAndCourses from "./AddFacultyAndCourses";
import PostPreviousYearPaper from "./PostPreviousYearPaper.js";
import UploadCourseMaterial from "./UploadCourseMaterial.js";
import AdminProfile from "./AdminProfile.js";
import CourseAllNotification from "./getAllNotificationOfCourse.js";
import Mark from "./mark.jsx";
import FacultyHomePage from "./FacultyHomePage.js";
import GetPrevYearPaper from "./getPrevYrPaper.js";
import ViewMark from "./viewMarks";
import StickyNotes from "./StickyFinal";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact={true}
            path="/login"
            render={() => (
              <div>
                <Login />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/home"
            render={() => (
              <div>
                <HomePage />
              </div>
            )}
          />
          <Route exact={true} path="/course" component={CoursePage} />
          <Route
            exact={true}
            path="/profile"
            render={() => (
              <div>
                <TitleBar />
                <StudentProfile />
                <StickyNotes />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/facultyperformanceanalysis"
            component={ChartFinal}
          />
          <Route
            exact={true}
            path="/addfaculty"
            render={() => (
              <div>
                <AddFacultyAndCourses />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/postpreviousyearpaper"
            render={() => (
              <div>
                <PostPreviousYearPaper />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/uploadnotification"
            render={() => (
              <div>
                <CoursePage />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/uploadcoursematerial"
            render={() => (
              <div>
                <UploadCourseMaterial />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/facultycoursepage"
            component={ButtonsForFaculty}
          />
          <Route
            exact={true}
            path="/studentperformanceanalysis"
            component={StudentPerformanceGraph}
          />
          <Route
            exact={true}
            path="/adminprofile"
            render={() => (
              <div>
                <AdminProfile />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/uploadmarks"
            render={() => (
              <div>
                <TitleBar />
                <Mark />
                {/* <StickyNotes /> */}
              </div>
            )}
          />
          <Route
            exact={true}
            path="/notification"
            component={CourseAllNotification}
          />
          <Route
            exact={true}
            path="/facultyhome"
            render={() => (
              <div>
                <TitleBar />
                <FacultyHomePage />
              </div>
            )}
          />
          <Route
            exact={true}
            path="/previousyearpaper"
            component={GetPrevYearPaper}
          />
          <Route exact={true} path="/viewmarks" component={ViewMark} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
