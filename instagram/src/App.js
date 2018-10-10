import React from 'react';
import SearchBar from './components/SearchBar/searchBar';
import PostContainer from './components/PostContainer/postContainer';
import dummyData from './dummy-data';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: []
		};
	}

	componentDidMount() {
		this.setState({ data: dummyData });
	}

	filterPosts = str => {
		const filteredPosts = dummyData.filter(post => post.username.includes(str));
		this.setState({ data: filteredPosts });
	};

	render() {
		return (
			<>
				<div className="App" />
				<SearchBar filterPosts={this.filterPosts} />
				<PostContainer posts={this.state.data} />
				<div />
			</>
		);
	}
}

export default App;
