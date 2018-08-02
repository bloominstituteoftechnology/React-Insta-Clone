import React, { Component } from "react";
import dummyData from "../../dummy-data";
import Fuse from "fuse.js";
import dataOptions from "../../SearchOptions";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "../PostContainer/PostContainer";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchInput: "",
      username: "",
      filteredInput: ''
    };
  }
  componentDidMount() {
    const storedPosts = JSON.parse(localStorage.getItem("posts"));
    if (storedPosts) {
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
    this.setState({ username: this.props.username })
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
                  username: this.props.username.toLowerCase(),
                  text: comment,
                  id: new Date(),
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

  handleLikeToggle = id => {
    this.setState(prevState => {
      return {
        posts: prevState.posts.map(currentPost => {
          if (currentPost.id === id) {
            if (!currentPost.liked) {
              return {
                ...currentPost,
                likes: currentPost.likes + 1,
                liked: true,
              };
            } else {
              return {
                ...currentPost,
                likes: currentPost.likes - 1,
                liked: false,
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
    let fuse = new Fuse(this.state.posts, dataOptions)
    let filtered = fuse.search(this.state.searchInput)
    let filteredInput = this.state.posts.filter(post => filtered.toString() === post.id);
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

  handleLogOut = () => {
    this.props.handleLogOut();
  }

  handleShowAll = () => {
    this.setState({filteredInput: ''})
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          handleChange={this.handleChange}
          searchInput={this.state.searchInput}
          handleSearchSubmit={this.handleSearchSubmit}
          handleLogOut={this.handleLogOut}
          handleShowAll={this.handleShowAll}
        />
        <div className="main-body">
          <div className="posts">
            {!this.state.filteredInput
              ? this.state.posts.map(post => (
                  <PostContainer
                    username={this.state.username}
                    key={post.id}
                    post={post}
                    handleAddComment={this.handleAddComment}
                    handleLikeToggle={this.handleLikeToggle}
                    handleDeleteComment={this.handleDeleteComment}
                  />
                ))
              : this.state.filteredInput.map(post => (
                  <PostContainer
                    username={this.state.username}
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
