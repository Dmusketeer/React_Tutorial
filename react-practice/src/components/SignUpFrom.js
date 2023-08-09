import React, { Component } from "react";
import "./SignUpFrom.css";
class SignUpFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      dateOfBirth: "",
      mobileNumber: "",
      chosenPassword: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form
        id="sign-up-form"
        className="form-group form-control"
        onSubmit={this.handleSubmit}
      >
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={this.state.username || ""}
          onChange={this.handleChange}
        />

        <br />
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />

        <br />
        <label>DateOfBirth: </label>
        <input
          type="date"
          name="dateOfBirth"
          value={this.state.dateOfBirth}
          onChange={this.handleChange}
        />

        <br />
        <label>MobileNumber: </label>
        <input
          type="tel"
          name="mobileNumber"
          value={this.state.mobileNumber}
          onChange={this.handleChange}
        />

        <br />
        <label>Password: </label>
        <input
          type="password"
          name="chosenPassword"
          value={this.state.chosenPassword}
          onChange={this.handleChange}
        />

        <br />
        <button type="submit" className="btn-primary">
          Sign Up
        </button>
      </form>
    );
  }
}

export default SignUpFrom;
