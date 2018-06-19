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
    console.log(event.target);
    const comments = this.state.postData[0].comments.slice();
    comments.push({
      username: "RandomUser",
      text: this.state.comment
    });
    let savedData = this.state.postData;
    savedData[0].comments = comments;
    localStorage.setItem('savedData', JSON.stringify(savedData));
    this.setState({postData: savedData, comment: ''});
    //Can I leave this in here? Also remember it the variable may not be "event.target.value"
  }

  handleCommentChange = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="posts-wrapper">
          {this.state.postData.map(post => <PostContainer post={post} addCommentHandler={this.addNewComment} commentChangeHandler={this.handleCommentChange} value={this.state.comment} />)}
        </div>
      </div>
    );
  }
}

export default App;
