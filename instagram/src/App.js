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

	handleComment = event => {
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
        	handleComment={this.handleComment} 
	      />
      </div>
    );
  }
}

export default App;



