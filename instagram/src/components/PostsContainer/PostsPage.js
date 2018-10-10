import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostsContainer from './PostsContainer';
import SearchBar from '../SearchBar/SearchBarContainer';
import LoadTime from '../LoadTime/LoadTime';

class PostsPage extends Component {
	constructor() {
		super();
		this.state = {
			dummyData: [],
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
		const filteredPosts = this.state.posts.filter((p) => {
			return p.username.includes(e.target.value);
		});
		return this.setState({ filteredPosts });
	};
	render() {
		return (
			<div className="App">
				<SearchBar searchTerm={this.state.searchTerm} searchPosts={this.searchPostsHandler} />
				<PostsContainer
					thumbnail={this.state.dummyData.thumbnail}
					posts={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts}
				/>
				<LoadTime dummyData={this.state.dummyData} />
			</div>
		);
	}
}

export default PostsPage;
