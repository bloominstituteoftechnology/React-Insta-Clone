import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import uuid from "uuid/v1/";

import "./App.css";
import dummyData from "./dummy-data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      posts: null
    };
    //search methods
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);

    //post methods
    this.handleCommentInput = this.handleCommentInput.bind(this);
    this.addComment = this.addComment.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  //search/filter methods
  handleSearchInputChange(event) {
    let text = event.target.value;
    let searchRx = new RegExp(text, "i");
    let posts = this.state.posts.slice();
    posts = posts.map(post => {
      let visibility = false;
      if (searchRx.test(post.username)) {
        visibility = true;
      }
      let returnObj = { visible: visibility };
      return Object.assign(post, returnObj);
    });
    this.setState({
      posts: posts,
      searchInput: text
    });
  }

  filterPostsforVisibility(arr) {
    let filteredArr = arr.filter(post => {
      return post.visible;
    });
    return filteredArr;
  }

  //Post specific methods
  //accepts an array of posts and a post Id. Returns an object with a targetPost property with its value as a
  //shallow copy of the post with the matching ID, and an otherPosts property, which is an array of shallow
  // copies of all Post Objects not selected
  processPostsById(postsArr, postId) {
    let nonTargetPosts = [];
    let targetPost;
    let postsCopy = postsArr.slice();
    for (let i = 0; i < postsCopy.length; i++) {
      if (postsArr[i].id === postId) {
        targetPost = Object.assign({}, postsArr[i]);
      } else {
        let nonTargetPost = Object.assign({}, postsArr[i]);
        nonTargetPosts.push(nonTargetPost);
      }
    }
    return { targetPost: targetPost, nonTargetPosts: nonTargetPosts };
  }

  handleCommentInput(event, postId) {
    // let postsToProcess = this.processPostsById(this.state.posts, postId);
    // let {targetPost, nonTargetPosts} = postsToProcess;

    let returnArr = this.state.posts.slice();
    let targetPost = returnArr.find(post => post.id === postId);

    if (targetPost) {
      let value = event.target.value;
      targetPost.commentInput = value;
      this.setState({ posts: returnArr });
    }
  }

  addComment(event, postId) {
    event.preventDefault();
    // let postsToProcess = this.processPostsById(this.state.posts, postId);
    // let {targetPost, nonTargetPosts} = postsToProcess;

    let returnArr = this.state.posts.slice();
    let targetPost = returnArr.find(post => post.id === postId);

    if (targetPost) {
      let text = targetPost.commentInput;
      let newComment;
      if (text.length !== 0) {
        newComment = {
          text: text,
          username: targetPost.username,
          id: uuid()
        };
      }

      let newComments = targetPost.comments.concat([newComment]);
      targetPost.comments = newComments;
      targetPost.commentInput = "";

      this.setState({ posts: returnArr });
    }
  }

  handleLike(event, postId) {
    // let postsToProcess = this.processPostsById(this.state.posts, postId);
    // let {targetPost, nonTargetPosts} = postsToProcess;
    let returnArr = this.state.posts.slice();
    let targetPost = returnArr.find(post => post.id === postId);

    if (targetPost) {
      if (!targetPost.userHasLiked) {
        targetPost.userHasLiked = true;
        targetPost.likes = targetPost.likes + 1;
      } else {
        targetPost.userHasLiked = false;
        targetPost.likes = targetPost.likes - 1;
      }
      this.setState({ posts: returnArr });
    }
  }

  //lifestyle methods

  componentDidMount() {
    let templatePost = {
      commentInput: "",
      userHasLiked: false,
      visible: true
    };
    let posts = dummyData.map(post => {
      let newObj = Object.assign({}, templatePost);
      newObj = Object.assign(newObj, post);

      let comments = newObj.comments;
      let newComments = comments.map(comment => {
        return Object.assign({ id: uuid() }, comment);
      });
      newObj.comments = newComments;

      if (newObj.id === undefined) {
        newObj.id = uuid();
      }

      return newObj;
    });
    this.setState({ posts: posts });
  }

  render() {
    let postElems = null;
    let posts = this.state.posts;
    if (posts) {
      posts = this.filterPostsforVisibility(posts);
      postElems = posts.map(post => {
        return (
          <PostContainer
            key={post.id}
            post={post}
            handleCommentInput={this.handleCommentInput}
            handleLike={this.handleLike}
            addComment={this.addComment}
          />
        );
      });
    }

    return (
      <div className="App">
        <header className="App-header">
          <SearchBar
            searchInput={this.state.searchInput}
            handleSearchInputChange={this.handleSearchInputChange}
            handleSearch={this.handleSearch}
          />
        </header>
        {postElems}
      </div>
    );
  }
}

export default App;
