import React, { Component } from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';

const appData = dummyData;

console.log(appData);

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			instgramData: [],
			comments: []
		};
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({ instgramData: appData });
		}, 3000);
	}
	render() {
		if (!this.state.instgramData.length) {
			return <h1>"Loading App Data..."</h1>;
		}
		return (
			<div className="appContainer">
				<SearchBar />
				<PostContainer appData={this.state.instgramData} />
			</div>
		);
	}
}

export default App;
