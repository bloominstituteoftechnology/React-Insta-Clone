import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';

class App extends Component {
	render() {
		return (
			<div className="main-container">
				<div className="App">
					<SearchBar /> <br/>
					<PostContainer /> <br/>
				</div>
			</div>
		);
	}
}

export default App;
