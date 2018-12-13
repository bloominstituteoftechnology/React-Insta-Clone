import React, { Component } from "react";
// import PropTypes from 'prop-types';
import dummyData from './dummy-data.js'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Header from "./components/Header";
import PostContainer from "./components/PostContainer/PostContainer";
import "./App.scss";

library.add(fab, far, fas);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: dummyData,
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <PostContainer data={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
