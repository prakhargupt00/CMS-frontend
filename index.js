import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Router } from "react-router";
import routes from "./routes.js";
import AllMiniNotificationTab from "./allmininotificationtab.js";
import AddFacultyAndCourse from "./AddFacultyAndCourses.js";

import TitleBar from "./TitleBar.js"; //dhruv
import "./BITS.png";
import "./logoutbutton.css";

import HomePage from "./homepage.js";
import CoursePage from "./coursepage.js";

import ButtonsForFaculty from "./ButtonsForFaculty.js";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
