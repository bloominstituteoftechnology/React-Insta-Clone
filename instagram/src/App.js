import React, { Component } from "react";
import SearchBarContainer from "./components/SearchBar/SearchBarContainer";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      inputText: ""
    };
  }

  componentDidMount() {
    this.setState(
      {
        data: dummyData
      },
      () => console.log(this.state.data)
    );
  }

  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      console.log("you typing")
    );
  };

  addComment = (e, username) => {
    e.preventDefault();

    let data = this.state.data.map(post => {
      if (post.username === username) {
        post.comments.push({ username: username, text: this.state.inputText });
      }
      return post;
    });
    this.setState({ data: data, inputText: "" });
  };

  addLike = (e, username) => {
    let count = this.state.data.map(post => {
      if (post.username === username) {
        post.likes.push({ likes: this.state.count + 1 });
      }
      return count;
    });
    this.setState({ count: count });
  };

  render() {
    return (
      <div className="App">
        <SearchBarContainer />
        <div className="post-container-container">
          {this.state.data.map(dataOnMap => {
            return (
              <PostContainer
                comments={dataOnMap.comments}
                data={dataOnMap}
                username={dataOnMap.username}
                addComment={this.addComment}
                inputText={this.state.inputText}
                handleChange={this.handleChange}
                addLike={this.addLike}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
