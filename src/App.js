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
			post:[]
		}
	}
	
	componentDidMount = () => {
		this.setState({ post: dummyData});
	}


 render() {
    return (
      <div className="App">
			<SearchBar/>
			<PostContainer userData = {this.state.post}/>
			<CommentSection commentData = {this.state.comments}/>
      </div>
    );
  }
}

export default App;
