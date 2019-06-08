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
			search: ''
		}
	}

	componentDidMount() {
		this.setState({ posts: dummyData })
	}

	// searchPostsHandler = e => {
	// 	e.preventDefault();
	// 	this.setState({
	// 		filteredPosts: this.state.posts.find(posts => posts.username === this.state.search) })
	// }

	searchPostsHandler = e => {
		e.preventDefault();
    e.stopPropagation();

    const found = this.state.posts.filter(post => {
      	if (post.username.toLowerCase().includes(this.state.search.toLowerCase())) {
        	return true;
    	} else {
        	return false;
      	}})
		this.setState({ filteredPosts: found })
		if (this.state.search === '') {
			this.setState({ posts: this.state.postsDuplicate });
		}
	}

	inputHandler = e => {
		this.setState({ search: e.target.value })
	}

	render() {
		// console.log(this.state.search)
		return (
			<div className="App">
				<SearchBar
					searchPost={this.searchPostsHandler}
					inputHandler={this.inputHandler}
					search={this.state.search}
				/>
				<PostsContainer
					posts={
						this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts
					}
				/>
				{ console.log(this.state.filteredPosts) }
			</div>
		);
	}
}

export default PostsPage