import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
	constructor() {
		super();
		this.state = {
			dummyData
		};
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<SearchBar />
				</header>
				<div className="mainContent">
					<PostContainer
						key={this.state.timestamp}
						thumbnailUrl={this.state.thumbnailUrl}
						username={this.state.username}
						imageUrl={this.state.imageUrl}
						likes={this.state.likes}
						comments={this.state.comments}
					/>
				</div>
			</div>
		);
	}
}

export default App;
