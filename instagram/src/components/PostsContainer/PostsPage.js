import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostsContainer from './PostsContainer';
import SearchBar from '../SearchBar/SearchBarContainer';
import LoadTime from '../LoadTime/LoadTime';

class PostsPage extends Component {
	constructor() {
		super();
		this.state = {
			posts: [],
			filteredPosts: []
		};
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({ posts: dummyData });
		}, 800);
	}
	searchPostsHandler = (e) => {
		const filteredPosts = this.state.posts.filter((post) => {
			return post.username.includes(e.target.value);
		});
		return this.setState({ filteredPosts });
	};
	render() {
		return (
			<div className="App">
				<SearchBar searchTerm={this.state.searchTerm} searchPosts={this.searchPostsHandler} />
				<PostsContainer
					posts={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts}
				/>
				<LoadTime posts={this.state.posts} />
			</div>
		);
	}
}

export default PostsPage;
