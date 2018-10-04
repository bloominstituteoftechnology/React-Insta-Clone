import React, { Component } from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';


const appData = dummyData;

console.log(appData);

class App extends Component {
	render() {
		return (
			<div className="appContainer">
				<SearchBar />
				<PostContainer appData={appData} />
			</div>
		);
	}
}

export default App;
