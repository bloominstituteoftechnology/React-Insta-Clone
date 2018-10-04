import React, { Component } from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import CommentSection from './components/CommentSection/CommentSection';

const appData = dummyData;

class App extends Component {
	render() {
		return (
			<div>
				<SearchBar />
        <PostContainer appData={appData} />
        <CommentSection/>
			</div>
		);
	}
}

export default App;
