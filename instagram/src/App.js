import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';


class App extends Component {
  constructor(){
    super();
    this.state = {
      posts:[]
     };
  }

componentDidMount() {
  console.log('componentDidMount');
  this.setState=({posts: dummyData});
}

  render() {
   console.log('rendering', this.state);
    return (
      <div className="container">

       <SearchBar  />

       <PostContainer posts={this.state.posts}/>
  
      </div>
    );
  }
}

export default App;
