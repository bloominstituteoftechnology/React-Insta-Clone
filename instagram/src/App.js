import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import dummyData from "./dummy-data";
import Comments from "./components/CommentSection/Comments";
import Posts from "./components/PostContainer/Posts";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.setState({ data: dummyData });
  }
  render() {
    return (
      <div className="App">
        {this.state.data.map(postdata => {
          return <Posts postdata={postdata} />;
        })}
      </div>
    );
  }
}

export default App;
