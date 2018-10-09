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
      commentInput: {},
      dummyData: [],
      searchInput: ''
    }

    this.inputHandler = this.inputHandler.bind(this);
    this.addNewComment = this.addNewComment.bind(this); 
    this.searchInputHandler = this.searchInputHandler.bind(this);
  }

  searchInputHandler(event){

    let filteredList = this.state.dummyData.filter(profile => profile.username.includes(event.target.value))
    this.setState({searchInput: event.target.value, dummyData: filteredList});
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

  componentDidMount(){
      setTimeout(() => this.setState({dummyData: dummyData}), 800);
  }

  render() {
    return (
      <div>
      <SearchBar searchInput={this.state.searchInput} filter={this.searchInputHandler}/>
      <div className="container">
        
        {this.state.dummyData === [] ? <p>Loading Data..</p> : this.state.dummyData.map(post => {return <PostContainer dummyData={post} /> })}
        
      </div>


      </div>
    );
  }
}

export default App;
/* stateComments={this.state.stateComments}
                       inputHandler={this.inputHandler}
                       addNewComment={this.addNewComment}
                       commentInput={this.state.commentInput} */