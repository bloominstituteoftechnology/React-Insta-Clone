import React, { Component } from "react";

import "./App.css";
import dummyData from "../../dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <div className="PostContainerList">
          {this.state.dummyData.map(user => {
            return <PostContainer userData={user} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
