import React, { Component } from 'react';
import PostContainer from './components/PostContainer';
import SearchBar from './components/SearchBar';
import dummyData from './dummy-data';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      commentsData: dummyData,
      username: 'anonymous',
      newPost: ''
    }
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


handleClick = () => {
  // const newState=this.state.commentsData.slice();
  // const newComment={
  //   username: this.state.username,
  //   id: Math.random(),
  //   text: this.state.comments.newPost
  // };
  // newState.push(newComment);
  // this.setState({ commentsData : newState })
  // console.log('state: ', this.state.commentsData)

}

  render() {
    return (
      <div className="App">
        
        <SearchBar />
        <div > 
          <PostContainer 
            passedState = {this.state.commentsData} 
            changeProps={this.handleChange}  
            clickProp = {this.handleClick} 
            name = {this.state.newPost}
          />
        </div>

      </div>
    );
  }
}

export default App;
