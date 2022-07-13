import axios from "axios";
import React, { Component, useState, useEffectS } from "react";
import { Navigate, useNavigate } from "react-router";
import NavBar from "./NavBar";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", repeatpass: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  handleSubmit(e) {
    e.preventDefault();

    if (this.state.password === this.state.repeatpass) {
      let formData = new FormData();
      formData.append("username", this.state.username);
      formData.append("password", this.state.password);

      console.log(formData);
      axios({
        method: "post",
        url: "http://localhost/registration/Registration.php",
        data: formData,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      })
        .then(function (result) {
          console.log(result);
          alert("Your account has been successfully created!");
          //navigate("MainContent.jsx");
        })
        .catch(function (result) {
          console.log(result);
        });
    } else {
      alert("Password is not matching");
    }
  }
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="card mt-5">
            <form className="card-body" onSubmit={this.handleSubmit} id="form">
              <div className="form-group mb-3">
                <label className="mb-2">
                  <strong>Userame</strong>
                </label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.username}
                />
              </div>

              <div className="form-group mb-3">
                <label className="mb-2">
                  <strong>Password</strong>
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
              </div>
              <div className="form-group mb-3">
                <label className="mb-2">
                  <strong>Repeat password</strong>
                </label>
                <input
                  type="password"
                  name="repeatpass"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.repeatpass}
                />
              </div>

              <div className="d-grid mt-3">
                <button type="submit" className="btn btn-block btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
