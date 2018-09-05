import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			posts: []
		};
	}

	search = string => {
		const posts = [...this.state.posts].filter(post =>
			post.username.includes(string)
		);
		this.setState({
			posts
		});
	};

	componentDidMount() {
		this.setState({
			posts: dummyData
		});
	}

	render() {
		return (
			<div className="App">
				<SearchBar search={this.search} />

				<PostContainer posts={this.state.posts} />
			</div>
		);
	}
}

export default App;
