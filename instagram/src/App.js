import React, { Component } from 'react';
import logo from './logo.svg';
import dummyData from './dummy-data';
import HeaderContainer from './components/SearchBar/HeaderContainer';
import PostContainer from './components/PostContainer/PostContainer';
import CommentContainer from './components/CommentSection/CommentContainer';
import './App.css';
import './components/CommentSection/comments.css'
import './components/PostContainer/UserName.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      userInfo: [...dummyData],
      likes: 0
    }
  
  }

  handleInput = this.handleInput.bind(this)

  handleInput(event) {
    this.setState ({
      inputText : event.target.value
    })

  }

  render() {
    
    return (
      <div className="App">
        <HeaderContainer handleInput={this.handleInput}/>
        <PostContainer newArr={this.state.userInfo} />
        <CommentContainer />
      </div>
    );
  }
}

export default App;
