import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import PostContainer from "./PostContainer/PostContainer";
import dummyData from "./dummy-data";
import uuid from "uuid/v1/";

class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.localStorageKey = "instagram-data";
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

  handleCommentInput(event, postId) {
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

    let storedData = JSON.parse(
      window.localStorage.getItem(this.localStorageKey)
    );
    let posts;

    if (!storedData) {
      posts = dummyData.map(post => {
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
    } else {
      posts = storedData.posts;
    }

    this.setState({ posts: posts });
  }

  componentWillUpdate(_, nextState) {
    window.localStorage.setItem(
      this.localStorageKey,
      JSON.stringify(nextState)
    );
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
      <React.Fragment>
        <header className="posts-page-header">
          <SearchBar
            searchInput={this.state.searchInput}
            handleSearchInputChange={this.handleSearchInputChange}
            handleSearch={this.handleSearch}
          />
        </header>
        {postElems}
      </React.Fragment>
    );
  }
}

export default PostsPage;
