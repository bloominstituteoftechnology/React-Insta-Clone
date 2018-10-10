import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/postcontainer'
import SearchBar from './components/SearchBar/seachbar';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class App extends Component {
  constructor(){
    super()
    this.state={
      userData: [],
      searchedPost:[],
      searchResult:''
    };
  console.log(this.state);
  
  }

  componentDidMount() {
        setTimeout(() => {
      this.setState({ userData: dummyData });
    }, 500);
  }

  handleInput= event =>{
    this.setState({ searchResult: event.target.value});
  }
  
  searchResults= event =>{
this.handleInput(event);
this.setState(prevState =>{
  const searchedPost = prevState.userData.filter(result =>{
    return result.username.includes(prevState.searchResult);
  });
  return{searchedPost: searchedPost};
});
  }


 
  render() {
    return (
      <div className="App">

      <SearchBar 
      changeHandle={this.searchResults}
      searchPost={this.state.searchResult}
      />
      
      <PostContainer 
      userData={
        this.state.searchedPost.length >0
        ? this.state.searchedPost
      :this.state.userData
      }/>    
        
        
      </div>
    );
  }
}

export default App;
