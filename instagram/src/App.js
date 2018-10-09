import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import PropType from 'prop-types';


library.add(faHeart);
library.add(faUserCircle);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      stateComments: [],
      commentInput: {}
    }

    this.inputHandler = this.inputHandler.bind(this);
    this.addNewComment = this.addNewComment.bind(this); 
  }

  inputHandler(event){
    let username = 'JoeSCMHOE126';  
    console.log(event.target);
    this.setState({
        commentInput: {
            text: event.target.value,
            id: Date.now(),
            username: username

      }
    })
  }
  addNewComment(event) {
    event.preventDefault();
    this.setState({
      stateComments: [...this.state.stateComments, this.state.commentInput],
      commentInput: {}
    })
  }


  render() {
    return (
      <div>
      <SearchBar />
      <div className="container">
        
        
        <PostContainer dummyData={dummyData} 
                       stateComments={this.state.stateComments}
                       inputHandler={this.inputHandler}
                       addNewComment={this.addNewComment}
                       commentInput={this.state.commentInput} />
      </div>
      </div>
    );
  }
}

export default App;
