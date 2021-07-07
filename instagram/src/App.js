import React, { Component } from 'react';
// import logo from './logo.svg';
import dummyData from './dummy-data';
import HeaderContainer from './components/SearchBar/HeaderContainer';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';
import './components/CommentSection/comments.css'
import './components/PostContainer/UserName.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      userInfo: dummyData
    }
  }
  
  handleInput = this.handleInput.bind(this)
  addComment = this.addComment.bind(this)

  addComment() {

  }

  handleInput(event) {
    this.setState ({
      inputText : event.target.value
    }, console.log(this.userComments))

  }

  render() {
    
    return (
      <div className="App">
        <HeaderContainer handleInput={this.handleInput}/>
        <PostContainer newArr={this.state.userInfo} />
      </div>
    );
  }
}

export default App;
