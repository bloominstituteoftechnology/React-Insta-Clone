import React, { Component } from 'react'
import dummyData from '../../dummy-data'
import PostContainer from './PostContainer'
import SearchBar from '../SearchBar/SearchBar'

class PostsPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			posts: [],
			username: '',
			filteredPosts: []
		}
	}
	componentDidMount() {
		const loggedUser = localStorage.getItem('username')
		this.setState({ posts: dummyData, username: loggedUser })
	}
	search = event => {
		const search = event.target.value
		const newPosts = this.state.posts.filter(post => {
			if (post.username.includes(search)) {
				return post
			}
		})
		this.setState({ filteredPosts: newPosts })
	}

	signOut = () => {
		// localStorage.removeItem('username')
		// localStorage.removeItem('password')
		localStorage.clear()
		window.location.reload()
	}

	render() {
		let posts
		if (this.state.filteredPosts.length > 0) {
			posts = this.state.filteredPosts
		} else {
			posts = this.state.posts
		}
		return (
			<div className="App">
				<h1 style={{ fontSize: '50px', fontWeight: '400' }}>Instagram</h1>
				<SearchBar signout={this.signOut} search={this.search} />
				<PostContainer posts={posts} />
			</div>
		)
	}
}

export default PostsPage
