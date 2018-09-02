import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostList from './components/PostContainer/PostList';
import SearchBar from './components/SearchBar/SearchBar';

import './index.css';

class App extends Component {
	constructor(){
	super();
		this.state = {
			posts: dummyData,
			filteredPosts: [],
			inputText: "",
		};
	}

	handleInput = event => {
    this.setState({
      inputText: event.target.value,
    });
  };


  render() {
    return (
      <div className="container">
      	<SearchBar handleInput={this.handleInput} />
        <PostList 
        	dataList={this.state.posts} 
        	handleInput={this.handleInput} 
	      />
      </div>
    );
  }
}

export default App;



