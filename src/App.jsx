import React, { Component } from "react";
import NavBar from "./NavBar";
import MainContent from "./MainContent";
import Login from "./Login";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
      </React.Fragment>
    );
  }
}
