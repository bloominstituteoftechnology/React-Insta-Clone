import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: []
		};
	}

	search = event => {
		if (event.key === 'Enter') {
			const data = [...this.state.data].filter(post =>
				post.username.includes(event.target.value)
			);
			this.setState({
				data
			});
		}
	};

	componentDidMount() {
		this.setState({
			data: dummyData
		});
	}

	render() {
		return (
			<div className="App">
				<SearchBar search={this.search} />

				<PostContainer posts={this.state.data} />
			</div>
		);
	}
}

export default App;
