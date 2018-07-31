import React, { Component } from "react";
import dummyData from "./dummy-data";
import fuzzysearch from "fuzzysearch";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import "./App.css";

class App extends Component {
  state = {
    posts: [],
    searchInput: "",
  };
  componentDidMount() {
    const storedPosts = JSON.parse(localStorage.getItem("posts"));
    if (storedPosts) {
      console.log("true");
      this.setState({ posts: storedPosts });
    } else {
      let posts = JSON.parse(JSON.stringify(dummyData));
      posts = posts.map(currentPost => {
        let o = { ...currentPost };
        o.id = currentPost.thumbnailUrl;
        return o;
      });
      this.setState({
        posts: posts,
      });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.posts !== this.state.posts) {
      localStorage.setItem("posts", JSON.stringify(this.state.posts));
    }
  }

  handleAddComment = (comment, id) => {
    this.setState(prevState => {
      return {
        posts: prevState.posts.map(currentPost => {
          if (currentPost.id === id) {
            return {
              ...currentPost,
              comments: [
                ...currentPost.comments,
                {
                  username: "test",
                  text: comment,
                  id: new Date()
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

  handleLikeToggle = (liked, id) => {
    this.setState(prevState => {
      return {
        posts: prevState.posts.map(currentPost => {
          if (currentPost.id === id) {
            if (liked) {
              return {
                ...currentPost,
                likes: currentPost.likes + 1,
              };
            } else {
              return {
                ...currentPost,
                likes: currentPost.likes - 1,
              };
            }
          } else {
            return currentPost;
          }
        }),
      };
    });
  };

  handleChange = value => {
    this.setState({ searchInput: value.toLowerCase() });
  };

  handleSearchSubmit = () => {
    let filteredInput = this.state.posts.filter(post =>
      fuzzysearch(this.state.searchInput, post.username)
    );
    this.setState({ filteredInput: filteredInput });
  };

  handleDeleteComment = (commentId, id) => {
    this.setState(prevState => {
      return {
        posts: prevState.posts.map(currentPost => {
          if (currentPost.id === id) {
            return {
              ...currentPost,
              comments: currentPost.comments.filter(
                thisComment => thisComment.id !== commentId
              ),
            };
          } else {
            return currentPost;
          }
        }),
      };
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          handleChange={this.handleChange}
          searchInput={this.state.searchInput}
          handleSearchSubmit={this.handleSearchSubmit}
        />
        <div className="main-body">
          <div className="posts">
            {!this.state.filteredInput
              ? this.state.posts.map(post => (
                  <PostContainer
                    key={post.id}
                    post={post}
                    handleAddComment={this.handleAddComment}
                    handleLikeToggle={this.handleLikeToggle}
                    handleDeleteComment={this.handleDeleteComment}
                  />
                ))
              : this.state.filteredInput.map(post => (
                  <PostContainer
                    key={post.id}
                    post={post}
                    handleAddComment={this.handleAddComment}
                    handleLikeToggle={this.handleLikeToggle}
                    handleDeleteComment={this.handleDeleteComment}
                  />
                ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
