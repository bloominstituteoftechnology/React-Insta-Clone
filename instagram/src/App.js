import React, { Component } from "react";
import "./App.css";
import postData from "./application-data.js";
import { Comments } from "./Comments.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      PostData: []
    };
  }
  componentDidMount = () => {
    this.setState({ PostData: postData });
  };
  render() {
    return (
      <div className="App">
        <input className="Search-Textbox" placeholder="Search..." />
        <Comments postData={this.state.PostData} />
      </div>
    );
  }
}

export default App;
