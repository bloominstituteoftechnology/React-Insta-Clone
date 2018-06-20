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
      comment: ''
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
    this.setState({comment: event.target.value})
  }

  handleLikeClick = event => {
    console.log(event.target);
  }

  handleLogout = event => {
    localStorage.removeItem('user');
    window.location.reload();
  }



  render() {
    return (
      <div className="App">
        <SearchBar handleLogout={this.handleLogout} />
        <div className="posts-wrapper">
          {this.state.postData.map((post, index) => <PostContainer key={index}
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
