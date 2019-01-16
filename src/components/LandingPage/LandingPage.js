import React, { Component } from "react";
import PropTypes from "prop-types";
import NavBar from "../NavBar/NavBarContainer";
import HomeContainer from "../Home/HomeContainer";

import "../../App.scss";
import LoginContainer from "../Login/LoginContainer";

class LandingPage extends Component {
  state = {
    isLoggedIn: false
  };

  componentDidMount = () => {
    return window.localStorage.token
      ? this.setState({ isLoggedIn: true })
      : null;
  };
  render() {
    const app = this.state.isLoggedIn ? (
      <div className="App">
        <NavBar />
        <HomeContainer />
      </div>
    ) : (
      <LoginContainer isLoggedIn={this.state.isLoggedIn} />
    );
    return <>{app}</>;
  }
}

LandingPage.propTypes = {
  Insta: PropTypes.arrayOf(
    PropTypes.shape({
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string
        })
      ),
      username: PropTypes.string,
      timestamp: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      likes: PropTypes.number,
      imageUrl: PropTypes.string
    })
  )
};

export default LandingPage;
