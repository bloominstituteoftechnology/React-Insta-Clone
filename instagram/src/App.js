import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';
import CommentSection from './components/CommentSection';

class App extends Component {
	render() {
		return (
			<div className="App">
				<SearchBar /> <br/>
				<PostContainer /> <br/>
				<CommentSection /><br/>
			</div>
		);
	}
}

export default App;
