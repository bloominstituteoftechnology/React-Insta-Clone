import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import CommentSection from './components/CommentSection/CommentSection.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import {SearchBar} from './components/SearchBar/SearchBar.js';

class App extends Component {
 
	constructor(){
		super();
		this.state = {
			dummyData: dummyData,
			inputText:""
		};
	}


 render() {
    return (
      <div className="App">
			<SearchBar/>
			<CommentSection/>
			{dummyData.map( (post, index) => (<PostContainer userPost={post} key={post.username + index} />))}
			<div>{console.log(dummyData)}</div>
			<PostContainer/>
      </div>
    );
  }
}

export default App;
