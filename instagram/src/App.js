import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';
import data from './dummy-data.js';

class App extends Component {

	state = {
		data: data
	}
	render() {
		return (
			<div className="main-container">
				<div className="App">
					<SearchBar />
						<div className='positioning-container'>
							<PostContainer data={data} />
						</div>
				</div>
			</div>
		);
	}
}

export default App;
