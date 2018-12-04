import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: dummyData,
      commentInput: '',
    };
  }
  handleCommentChange = e => {
    this.setState({
      commentInput: e.target.value,
    });
  }
  handleNewComment = (id) => {
    if(!this.state.commentInput){
      alert('Please add a comment!');
      return;
    }
    this.setState((prevState) => {
      prevState.data.forEach(x => {
        if (x.imageUrl === id){
          x.comments.shift();
          x.comments.push({
            username: 'Test User',
            text: prevState.commentInput,
          });
        }
      });
      return {
        data: prevState.data,
        commentInput: '',
      }
    });
  }
  render() {
    return (
      <div className="app">
        <SearchBar />
        {this.state.data.map(postData => (
          <PostContainer
            key={postData.imageUrl} 
            data={postData}
            commentValue={this.state.commentInput}
            onCommentChange={this.handleCommentChange}
            onAddComment={this.handleNewComment}
          />
          )
        )}
      </div>
    );
  }
}

export default App;
