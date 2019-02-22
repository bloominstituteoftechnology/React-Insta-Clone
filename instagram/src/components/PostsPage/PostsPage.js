import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';
import dummyData from '../../dummy-data';

class PostPage extends React.Component {
	constructor() {
		super();
		this.state = {
			posts: []
		};
	}

	// Filters dummyData so you can do consecutive searches. Doesn't handle new posts yet
	search = string => {
		const posts = dummyData.filter(post => post.username.includes(string));
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

export default PostPage;
