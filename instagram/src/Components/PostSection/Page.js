import React from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBarContainer/SearchBar.js';
import PostContainer from './PostContainer.js';

class PostsPage extends React.Component {
	constructor() {
		super();
		this.state = {
			post: [],
			filteredPosts: []
		};
	}

	componentDidMount() {
		this.setState({ post: dummyData});
	}

	searchPostsHandler = event => {
		const posts = this.state.post.filter(post => {
			if (post.username.includes(event.target.value)) {
				return post;
			}
		});
		this.setState({ filteredPosts: posts });
	};

	render() {
		return (
			<div className="posts-page">
				<SearchBar searchPosts={this.searchPostsHandler} />
				<PostContainer post={this.state.post} />
			</div>
		);
	};
}


export default PostsPage;