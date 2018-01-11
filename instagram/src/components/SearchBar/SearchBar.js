import React, { Component } from 'react';
import posts from '../../dummy-data';
import PostContainer from '../PostContainer/PostContainer';

class SearchBar extends Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      searchInput: '',
      likedStyle: {},
      commentText: '',
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleAddComment = this.handleAddComment.bind(this);
    this.handleCommentInputChange = this.handleCommentInputChange.bind(this);
  }
  componentDidMount() {
    this.setState({
      posts,
    })
  }

  handleSearchChange(event) {
    const searchInput = event.target.value;
    this.setState({
      searchInput,
    })
  }

  handleSearchSubmit(e) {
    e.preventDefault();
    const searchInput = this.state.searchInput;
    const newPosts = [];
    {posts.map((post) => {
      if (post.username === searchInput) {
        newPosts.push(post);
      }
    })}
    this.setState({
      posts: newPosts,
    })
  }
  handleLike(event) {
    event.preventDefault()
    const index = event.target.id;
    const post = this.state.posts.slice(0);
    if (post[index].liked) {
      posts[index].likes--;
    } else {
      posts[index].likes++;
    }
    posts[index].liked = !posts[index].liked;
    this.setState({
      posts,
    })
  }
  handleCommentInputChange(event) {
    const commentText = event.target.value;
    this.setState({
      commentText,
    })
  }
  handleAddComment(event) {
    event.preventDefault();
    const index = event.target.id;
    const comments = this.state.posts[index].comments;
    const newComment = this.state.commentText;
    comments.push({username: 'Troy', text: newComment});
    this.setState({
      comments,
      commentText: '',
    })
  }

  render(){
    {if (this.state.posts.length === 0) {
      this.state.posts = [{username: `Doesn't look like anything to me`}]
    }}
    return (
      <div>
        <form onSubmit={this.handleSearchSubmit}>
          <input placeholder='Search by username' onChange={this.handleSearchChange} ></input>
        </form>
          {this.state.posts.map((post, i) => <PostContainer key={i} post={post} value={i} handleLike={this.handleLike} handleCommentInputChange={this.handleCommentInputChange} handleAddComment={this.handleAddComment}/>)}
      </div>
    )
  }
}

export default SearchBar;
