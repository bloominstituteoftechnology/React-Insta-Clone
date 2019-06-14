import React from "react";
import insta from "../../icons/insta.png";
import discover from "../../icons/discover.png";
import heart from "../../icons/heart_unfilled.png";
import profile from "../../icons/profile.png";
import Posts from "../PostContainer/postContainer.js";
import Login from "../LoginComponent/login.js";
import { isLoggedIn, logout } from "../withAuth/services";
import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
const Nav = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin: 0px;
  margin-bottom: 100px;
  align-items: center;
`;
const Logo = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-around;
  width: 25%;
  height: 50px;
  font-size: 1rem;
  font-style: oblique;
  align-items: center;
`;
const LogoText = styled.h1`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  height: 50px;
`;
const Images = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-around;
  width: 25%;
`;
const NavInput = styled.input`
  width: ${props => (props.searchbar ? "250px" : "25px")};
  height: 25px;
`;

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
        <Nav>
          <Logo>
            <img src={insta} alt="logo" />
            <LogoText>Insta Copy</LogoText>
          </Logo>

          <NavInput searchbar type="text" onChange={this.textHandler} />

          <Images>
            <NavInput src={discover} alt="Nav" type="image" />
            <NavInput src={heart} alt="Nav" type="image" />
            <NavInput
              src={profile}
              alt="Nav"
              onClick={this.SignOutHandler}
              type="image"
            />
          </Images>
        </Nav>
        {this.LoggedInHandler()}
      </div>
    );
  }
}
