import React, { Component } from "react";
import dummyData from "./dummy-data.js";
import SearchBarNavContainer from "./components/SearchBar/SearchBarNavContainer";
import PostContainer from "./components/PostContainer/PostContainer";
import "./App.css";

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

  handleLiked = timestamp =>
    this.setState(prevState => ({
      data: prevState.data.map(post => {
        if (post.timestamp === timestamp) {
          return {
            ...post,
            likes: post.likes + 1
          };
        } else return post;
      })
    }));

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBarNavContainer />
        </header>
        <div>
          {this.state.data.map(post => {
            return <PostContainer data={post} handleLiked={this.handleLiked} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
