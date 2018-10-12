import React, { Component } from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

const appData = dummyData;

console.log(appData);

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			instagramData: [],
			comments: [],
			searchInput: ''
		};
	}
	searchHandler = event => {
		event.preventDefault();
		let returnedData = [...this.state.instagramData];

		const filterData = () => {
			returnedData = returnedData.filter(element => {
				if (element.username === this.state.searchInput) return element;
				else return null;
			});

			this.setState({ instagramData: returnedData });
			if (this.state.searchInput.length === 0) {
				this.setState({ instagramData: appData });
			}

			if (returnedData === null) {
				this.setState({ instagramData: appData });
			}
		};
		filterData();
	};

	searchInput = event => {
		this.setState({ searchInput: event.target.value });
	};

	componentDidMount() {
		setTimeout(() => {
			this.setState({ instagramData: appData });
		}, 3000);
	}
	render() {
		if (!this.state.instagramData.length) {
			return <h1>"Loading App Data..."</h1>;
		}
		return (
			<div className="appContainer">
				<PostContainer
					appData={this.state.instagramData}
					searchInput={this.searchInput}
					searchHandler={this.searchHandler}
				/>
			</div>
		);
	}
}

export default App;
