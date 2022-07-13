import React, { Component } from "react";
import NavBar from "./NavBar";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
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

    let formData = new FormData();
    formData.append("username", this.state.username);
    formData.append("password", this.state.password);

    console.log(formData);
    axios({
      method: "post",
      url: "http://localhost/registration/Login.php",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (result) {
        console.log(result);
        alert("Your are logged in!");
      })
      .catch(function (result) {
        console.log(result);
      });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="card mt-5">
            <form
              name="f1"
              className="card-body"
              onSubmit={this.handleSubmit}
              action=""
              method="POST"
            >
              <input type="hidden" name="comanda" value="Login" />
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

              <div className="d-grid mt-3">
                <button
                  type="submit"
                  className="btn btn-block btn-primary"
                  value="Login"
                >
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

export default Login;
