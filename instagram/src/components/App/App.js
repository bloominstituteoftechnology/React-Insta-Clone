import React, { Component } from "react";
import dummyData from "../../dummy-data";
import Fuse from "fuse.js";
import dataOptions from "../../SearchOptions";
import Header from "../Header/Header";
import PostContainer from "../PostContainer/PostContainer";
import { MainBody } from "./app-styles";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      searchInput: "",
      user: undefined,
      filteredInput: "",
    };
  }
  componentDidMount() {
    this.setState({ user: this.props.user });
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
                  username: this.props.user.username.toLowerCase(),
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

  handleLike = (liked, id) => {
    if (liked) {
      this.setState(prevState => {
        return{
          posts: prevState.posts.map(currentPost => {
            if (currentPost.id === id) {
              return {
                ...currentPost,
                likes: currentPost.likes + 1,
              };
            } else {
              return currentPost
            }
          }),
      }}, () => this.handleAddLike(id))
    } else { 
      this.setState(prevState => {
        return {
          posts: prevState.posts.map(currentPost => {
            if (currentPost.id === id) {
              return {
                ...currentPost,
                likes: currentPost.likes - 1,
              };
            } else {
              return currentPost
            }
          }),
      }
      }, () => this.handleRemoveLike(id))
    }
  }

  handleChange = value => {
    this.setState({ searchInput: value.toLowerCase() });
  };

  handleSearchSubmit = () => {
    if (this.state.searchInput) {
      let fuse = new Fuse(this.state.posts, dataOptions);
      let filtered = fuse.search(this.state.searchInput);
      let filteredInput = this.state.posts.filter(
        post => filtered.toString() === post.id
      );
      this.setState({ filteredInput: filteredInput });
    } else {
      this.handleShowAll();
    }
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

  checkforLike = id => {
    let liked = false;
    if (this.state.user.likedPosts) {
      this.state.user.likedPosts.forEach(like => {
        if (like === id) {
          liked = true;
        }
      });
    }
    return liked;
  };

  handleLogOut = () => {
    this.props.handleLogOut(this.state.user);
  };

  handleShowAll = () => {
    this.setState({ filteredInput: "" });
  };

  handleAddLike = id => {
    this.setState(prevState => {
      if (prevState.user.likedPosts) {
        return {
          user: {
            ...prevState.user,
            likedPosts: [...prevState.user.likedPosts, id],
          },
        };
      } else {
        return {
          user: {
            ...prevState.user,
            likedPosts: [id],
          },
        };
      }
    });
  };

  handleRemoveLike = id => {
    this.setState(prevState => {
      return {
        user: {
          ...prevState.user,
          likedPosts: prevState.user.likedPosts.filter(like => like !== id),
        },
      };
    });
  };

  render() {
    return (
      <div>
        <Header
          handleChange={this.handleChange}
          searchInput={this.state.searchInput}
          handleSearchSubmit={this.handleSearchSubmit}
          handleLogOut={this.handleLogOut}
          handleShowAll={this.handleShowAll}
        />
        <MainBody>
          {!this.state.filteredInput
            ? this.state.posts.map(post => (
                <PostContainer
                  liked={this.checkforLike}
                  username={this.state.user.username}
                  key={post.id}
                  post={post}
                  handleAddComment={this.handleAddComment}
                  handleLike={this.handleLike}
                  handleDeleteComment={this.handleDeleteComment}
                />
              ))
            : this.state.filteredInput.map(post => (
                <PostContainer
                  username={this.state.user.username}
                  key={post.id}
                  post={post}
                  handleAddComment={this.handleAddComment}
                  handleLikeToggle={this.handleLikeToggle}
                  handleDeleteComment={this.handleDeleteComment}
                />
              ))}
        </MainBody>
      </div>
    );
  }
}

export default App;
