import React, { Component } from 'react';
import '../../App.css';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';

class PostPage extends Component {
  constructor() {
    super();
    this.state = {
      postData: [],
      comment: '',
      searchResults: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    this.setState({postData: dummyData});
  }

  addNewComment = (event, index) => {
    event.preventDefault();
    index = event.target.getAttribute("value");
    const comments = this.state.postData[index].comments.slice();
    comments.push({
      username: localStorage.getItem('user'),
      text: this.state.comment
    });
    let savedData = this.state.postData;
    savedData[index].comments = comments;
    localStorage.setItem('savedData', JSON.stringify(savedData));
    this.setState({postData: savedData, comment: ''});
  }

  handleCommentChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleLogout = event => {
    localStorage.removeItem('user');
    window.location.reload();
  }

  handlePostsSearch = event => {
    event.preventDefault();
    let searchResults = this.state.postData.slice();
    searchResults = searchResults.filter(post => {
      if (post.username.includes(this.state.searchTerm)) {
        return post;
      }
    });
    this.setState({searchResults: searchResults});

  }



  render() {
    let returnedPosts;
    returnedPosts = (this.state.searchResults.length > 0) ? this.state.searchResults : this.state.postData;
    return (
      <div className="App">
        <SearchBar searchHandler={this.handlePostsSearch} changeHandler={this.handleCommentChange} handleLogout={this.handleLogout} />
        <div className="posts-wrapper">
          {returnedPosts.map((post, index) => <PostContainer key={index}
          index={index}
          post={post}
          addCommentHandler={this.addNewComment}
          commentChangeHandler={this.handleCommentChange}
          value={this.state.comment}
          toggleLike={this.handleLikeClick} />)}
        </div>
      </div>
    );
  }
}

export default PostPage;
