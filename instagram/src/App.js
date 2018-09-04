import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: dummyData
    };
  }

  componentDidMount() {
    this.getPosts('./dummy-data.js');
  }

  render() {
  	return (
  	    <div className = 'App'>
  	      <SearchBar/>
  	      {dummyData.map(posts => (
  		        <PostContainer posts = {posts} />
  	      ))}
  	    </div>
	   );
   }
}

export default App;
