import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: [],
      /*comments: this.state.postData.comments,*/
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
      username: "the_mad_poster",
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

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="posts-wrapper">
          {this.state.postData.map((post, index) => <PostContainer key={index} index={index} post={post} addCommentHandler={this.addNewComment} commentChangeHandler={this.handleCommentChange} value={this.state.comment} />)}
        </div>
      </div>
    );
  }
}

export default App;
