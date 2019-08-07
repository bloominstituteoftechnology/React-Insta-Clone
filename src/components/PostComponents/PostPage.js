import React, { Component } from 'react'
import dummyData from '../../dummy-data'
import PostsContainer from './PostContainer'
import SearchBar from '../SearchComponent/SearchBar'

class PostsPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			posts: [],
			filteredPosts: [],
			search: '',
    }
	}

	componentDidMount() {
		this.setState({
      posts: dummyData,
    })
  }

	inputHandler = e => {
    this.setState({
      search: e.target.value,
      filteredPosts: this.state.posts.filter(post => post.username === e.target.value)
    })
	}

	render() {
		return (
			<div className='App'>
        { console.log('Posts:', this.state.posts.filter(post => post.username === this.state.search)) }
        { console.log('Filtered Posts:', this.state.filteredPosts) }
				<SearchBar
					searchPosts={this.searchPostsHandler}
					inputHandler={this.inputHandler}
					search={this.state.search}
				/>
				<PostsContainer
					posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
					}
				/>
			</div>
		)
	}
}

export default PostsPage