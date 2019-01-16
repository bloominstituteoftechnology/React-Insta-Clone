import React, { Component } from "react";
import PropTypes from "prop-types";
import NavBar from "./components/NavBar/NavBarContainer";
import HomeContainer from "./components/Home/HomeContainer";

import "./App.scss";
import LoginContainer from "./components/Login/LoginContainer";

class App extends Component {
  state = {
    isLoggedIn: false
  };
  render() {
    const app = this.state.isLoggedIn ? (
      <div className="App">
        <NavBar />
        <HomeContainer />
      </div>
    ) : (
      <LoginContainer />
    );
    return <>{app}</>;
  }
}

App.propTypes = {
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

export default App;
