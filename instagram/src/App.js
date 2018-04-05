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

  incrementLikes = index => {
    let data = this.state.data;
    data[index].likes = data[index].likes + 1;
    this.setState({ data });
  };
  render() {
    return (
      <div className="App">
        {this.state.data.map((postdata, index) => {
          return (
            <Posts
              postdata={postdata}
              key={index}
              index={index}
              incrementLikes={this.incrementLikes}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
