import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import MainContent from "./MainContent";
import Register from "./Register.jsx";
import Menu from "./Menu";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App></App>}></Route>
      <Route path="/Login.jsx" element={<Login />} />
      <Route path="/MainContent.jsx" element={<MainContent />} />
      <Route path="/Register.jsx" element={<Register />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
