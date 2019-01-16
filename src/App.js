import React, { Component } from "react";
// import PropTypes from "prop-types";
// import NavBar from "./components/NavBar/NavBarContainer";
// import HomeContainer from "./components/Home/HomeContainer";

// import "./App.scss";
// import LoginContainer from "./components/Login/LoginContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import LandingPage from "./components/LandingPage/LandingPage";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={Login} />
        </>
      </Router>
    );
  }
}

export default App;
