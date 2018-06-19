import React, { Component } from 'react';
import PostContainer from './components/PostContainer';
import SearchBar from './components/SearchBar';
import dummyData from './dummy-data';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      commentsData: [],
      username: 'anonymous',
      newPost: ''
    }
  }
  componentDidMount() {
    this.setState ({ commentsData: dummyData });
  }
  // handleChange = e => {
  //   console.log('e target value: ', e.target.value);
  //   this.setState({ newPost: e.target.value})
  //   console.log('newpost: ', this.state.newPost)
  // }
  
  handleChange = (e) => {
    console.log('e target value: ', e.target.value);
    this.setState({ newPost: e.target.value });
}


addcomment =(e) => {
  e.preventDefault();
  const newCommentsCopy=this.state.comments.slice();
  console.log('sliced newCommentsCopy: ', newCommentsCopy)
  const newComment = this.state.newPost;
  const newObj={
      username: 'anonymous',
      text: newComment
  }
  let pushedCopy = newCommentsCopy.push(newObj);
  console.log('new pushed copy ', pushedCopy)
  this.setState({ comments: pushedCopy, newPost: '' })
}

  render() {
    return (
      <div className="App">
        
        <SearchBar />
        <div > 
          <PostContainer 
            passedState = {this.state.commentsData} 
            changeProps={this.handleChange}  
            clickProp = {this.addcomment} 
            name = {this.state.newPost}
          />
        </div>
      </div>
    );
  }
}

export default App;
