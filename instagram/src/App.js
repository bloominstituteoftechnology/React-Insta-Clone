import React, { Component } from "react";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import "./App.css";

class App extends Component {
  state = {
    posts: dummyData,
  };

  handleAddComment = (comment, post) => {
    this.setState(prevState => {
      return {
        posts: prevState.posts.map(currentPost => {
          if (currentPost === post) {
            return {
              ...currentPost,
              comments: [
                ...currentPost.comments,
                {
                  username: "test",
                  text: comment,
                },
              ],
            };
          } else {
            return currentPost;
          }
        }),
      };
    });
  };

  handleLikeToggle = (liked, post) => {
    this.setState(prevState => {
      return {
        posts: prevState.posts.map(currentPost => {
          if (currentPost === post) {
            if (liked) {
              return {
                ...currentPost,
                likes: currentPost.likes + 1
              }
            } else {
              return {
                ...currentPost,
                likes: currentPost.likes - 1
              }
            }
          } else {
            return currentPost
          }
        })
      }
    })
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="main-body">
          <div className="posts">
            {this.state.posts.map(post => (
              <PostContainer
                post={post}
                handleAddComment={this.handleAddComment}
                handleLikeToggle={this.handleLikeToggle}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
