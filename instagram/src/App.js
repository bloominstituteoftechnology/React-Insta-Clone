import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import PropTypes from 'prop-types';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/search-bar.js';
import PostContainer from './components/PostContainer/post-container.js';
import PostContainerList from './components/PostContainer/post-container-list.js';
import CommentSectionList from './components/CommentSection/comment-section-list.js';
import CommentSection from './components/CommentSection/comment-section.js';

class App extends Component {
    constructor(props) {
	super(props);
    }    

    render() {
	return (
	    <div className="App">
	      <SearchBar />
	      {dummyData.map(posts => (
		  <PostContainer posts={posts} />
	      ))}
	    </div>
	);
    } 
}

export default App;
