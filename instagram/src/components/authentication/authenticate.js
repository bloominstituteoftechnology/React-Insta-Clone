/* eslint-disable default-case */
/* eslint-disable no-useless-constructor */
import React from "react";
import dummyData from "../../dummy-data";

export const authenticate = App => Login =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        inputText: "",
        inputUsername: "",
        inputPassword: "",
        currentUser: ""
      };
    }
    componentDidMount() {
      const data = JSON.parse(localStorage.getItem("data")) || dummyData;
      const currentUser = JSON.parse(localStorage.getItem("currentUser")) || "";
      this.setState(
        {
          data,
          currentUser
        },
        () => {
          localStorage.setItem("data", JSON.stringify(this.state.data));

          localStorage.setItem(
            "currentUser",
            JSON.stringify(this.state.currentUser)
          );
        }
      );
    }

    handleSubmit = e => {
      switch (e.target.name) {
        case "loginForm":
          this.loginUser();
      }
    };

    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
    loginUser = () => {
      this.setState({
        currentUser: this.state.inputUsername
      });
    };

    render() {
      return !this.state.currentUser ? (
        <Login
          inputUsername={this.state.inputUsername}
          inputPassword={this.state.inputPassword}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      ) : (
        <App
          inputUsername={this.state.inputUsername}
          inputPassword={this.state.inputPassword}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data={this.state.data}
          currentUser={this.state.currentUser}
          inputText={this.state.inputText}
        />
      );
    }
  };
