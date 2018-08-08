import React, { Component } from "react";
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar'
import Authenticate from './components/Authentication/Authenticate'


class App extends Component {
  constructor() {
    super();
    this.state = {
      postList: [],
      commentField: ''
    };

  }




  render() {
    return (
      <div className='App'>
        <SearchBar />
        <PostContainer
          postList={this.state.postList}
          submitNewComment={this.submitNewComment}
          updateCommentField={this.updateCommentField}
          commentField={this.props.commentField} />
      </div>
    );
  }
}

export default Authenticate(App);