import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/search-bar.js';
import PostContainer from './components/PostContainer/post-container.js';
import PostComment from './components/CommentSection/post-comments.js';

class App extends Component {
    constructor() {
    	super();
	this.state = {
	    comments: [],
	    inputText: ''
	};
    }

    addComment = event => {
	event.preventDefault();
	if (this.state.inputText) {
	    this.setState({
		comments: [...this.state.comments, this.state.inputText],
		inputText: ''
	    });
	}
    }

    handleInput = event => {
	this.setState({
	    inputText: event.target.value
	});
    };

    render() {
	return (
	    <div className="App">
	      <SearchBar />
	      {dummyData.map(posts => (
                  <div>
		    <PostContainer
		    posts={posts}
		      />
		  </div>
	      ))}
	    </div>
	);
    } 
}

export default App;
