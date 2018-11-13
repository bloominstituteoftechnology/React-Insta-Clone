import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import PropTypes from "prop-types";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }
  componentDidMount() {
    this.setState({ data: dummyData });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <PostContainer chocolate={this.state.data} />
      </div>
    );
  }
}

export default App;
