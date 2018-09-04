import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/search-bar.js';
import PostContainer from './components/PostContainer/post-container.js';
// import PostComment from './components/CommentSection/post-comments.js';

class App extends Component {
    constructor() {
    	super();
	this.state = {
	    posts: dummyData,
	    inputText: ''
	};
    }

    addComment = timestamp => {
	if (this.state.posts.timestamp === timestamp) {
	    this.setState({
		posts: [...this.state.posts, {comments: [{username: 'akshayG', text: this.state.inputText}]}],
		inputText: ''
	    }, () => console.log(this.state));
	}
	console.log(timestamp);
	console.log(this.state.posts.timestamp);
	console.log('comments include', this.state.inputText);
    }

    completedComment = timestamp => {
    	const newArr = [...this.state.posts];
	console.log(this.state.posts);
	newArr.map(posts => {
	    if(posts.timestamp === timestamp) {
		posts.comments.push(this.state.inputText);
		console.log("works!");
	    } else console.log("didn't work");
	});
	this.setState({
	    posts: newArr
	}, () => console.log('state is', this.state.inputText));
    };
    
    handleInput = event => {
	console.log('handeInput with', event.target.value);
	this.setState({
	    inputText: event.target.value
	}, () => console.log(this.state));
    };

    render() {
	return (
	    <div className="App">
	      <SearchBar />
	      {this.state.posts.map(posts => (
                  <div>
		    <PostContainer
		      posts={posts}
		      addComment={this.addComment}
		      handleInput={this.handleInput}
		      key={posts.timestamp}
		      />
		  </div>
	      ))}
	    </div>
	);
    } 
}

export default App;
