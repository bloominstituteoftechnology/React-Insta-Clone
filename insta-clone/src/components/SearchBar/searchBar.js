import React from "react";
import "./searchBar.css";
import insta from "../../icons/insta.png";
import discover from "../../icons/discover.png";
import heart from "../../icons/heart_unfilled.png";
import profile from "../../icons/profile.png";
import Posts from "../PostContainer/postContainer.js";
import Login from "../LoginComponent/login.js";
import { isLoggedIn, logout } from "../withAuth/services";
import { BrowserRouter, Route } from "react-router-dom";
export default class searchBar extends React.Component {
  state = {
    text: ""
  };
  textHandler = e => {
    this.setState({
      text: e.target.value
    });
  };
  LoggedInHandler = () => {
    return isLoggedIn() === true ? (
      <Posts filter={this.state.text} />
    ) : (
      <Login />
    );
  };
  SignOutHandler = async () => {
    await logout(this.RedirectHandler);
  };
  RedirectHandler = () => {
    this.props.history.push("/login");
  };
  render() {
    return (
      <div>
        <div className="Nav">
          <div className="Nav Logo">
            <img src={insta} alt="logo" />
            <h1>Insta Copy</h1>
          </div>
          <div className="Input">
            <input
              className="SearchInput"
              type="text"
              onChange={this.textHandler}
            />
          </div>
          <div className="Nav Images">
            <img src={discover} alt="Nav" />
            <img src={heart} alt="Nav" />
            <img src={profile} alt="Nav" onClick={this.SignOutHandler} />
          </div>
        </div>
        {this.LoggedInHandler()}
      </div>
    );
  }
}
