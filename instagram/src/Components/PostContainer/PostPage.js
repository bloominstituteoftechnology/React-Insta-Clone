import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './Components/PostsContainer/PostContainer';
import Header from './Components/SearchBar /Header';

class PostPage extends Component {
	constructor() {
		super();
		this.state = {
			posts: [],
			postsFilter: []
		};
	}
	searchHandler = (event) => {
		let p = this.state.posts.filter((post) => {
			if (post.username.includes(event.target.value)) {
				return post;
			}
		});
		this.setState({ postsFilter: p });
	};
	componentDidMount() {
		this.setState({ posts: dummyData });
	}

	logOut = (event) => {
		event.preventDefault();
		localStorage.removeItem('username', this.state.login);
		window.location.reload();
	};
	render() {
		return (
			<div>
				<logoChild>
					<button type="logout" onClick={this.logOut}>
						Log Out
					</button>
				</logoChild>
				<header>
					<Header searchPosts={this.searchHandler} />
				</header>
				<PostContainer posts={this.state.postsFilter.length > 0 ? this.state.postsFilter : this.state.posts} />
			</div>
		);
	}
}

export default PostPage;
