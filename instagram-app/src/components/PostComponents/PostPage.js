import React, { Component } from 'react'
import dummyData from '../../dummy-data'
import PostsContainer from './PostContainer'
import SearchBar from '../SearchComponent/SearchBar'

class PostsPage extends Component {
	constructor() {
		super();
		this.state = {
			posts: [],
			filteredPosts: [],
		}
	}

	componentDidMount() {
		this.setState({ posts: dummyData })
	}

	render() {
		return (
			<div className="App">
				<SearchBar />
				<PostsContainer
					posts={
						this.state.filteredPosts.length > 0
							? this.state.filteredPosts
							: this.state.posts
					}
				/>
			</div>
		);
	}
}

export default PostsPage