import React, { Component } from "react";
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar'


class App extends Component {
  constructor() {
    super();
    this.state = {
      postList: [],
      commentField: ''
    };

  }
  componentDidMount() {
    this.setState({ postList: dummyData });
  }


  updateCommentField = event => {
    this.setState({ [event.target.name]: event.target.value })
  }


  submitNewComment = (event, timestamp) => {
    event.preventDefault();
    const newPostList = this.state.postList.map((eachPost) => {
      if (eachPost.timestamp === timestamp) {
        eachPost.comments.push({
          username: 'jdfvr',
          text: this.state.commentField
        });
      } 
      return eachPost;
    });
    this.setState({postList: newPostList, commentField: ""});
  };



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

export default App;