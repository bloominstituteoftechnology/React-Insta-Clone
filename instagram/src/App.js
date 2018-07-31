import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'
import  dummyData from "./dummy-data";

class App extends Component {
  constructor(){
    super()
    this.state ={
      posts: dummyData,
      value: undefined
    }
  }
  componentDidMount(){
    console.log("hey there what the hell is going on")
    //this is asynchronous so this allows for rerendering with new data
    //but it's only asynchronous depending on the rendering context. 
    this.setState = {
      value: true
    }
  }
  render() {
    return (
      <div className="container">
        <SearchBar />
          <PostContainer posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
