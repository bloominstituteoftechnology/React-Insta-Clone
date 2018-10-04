import React, { Component } from 'react'
import './App.css'
import PostContainer from './Components/PostContainer/PostContainer'
import dummyData from './dummy-data'
import CommentSection from './Components/CommentSection/CommentSection'
import SearchBar from './Components/SearchBar/SearchBar'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			posts: [],
			username: ''
		}
	}

	componentDidMount() {
		localStorage.setItem('username', JSON.stringify(this.state.username))
		const instagramUser = localStorage.getItem('username')
		this.setState({
			posts: dummyData,
			username: instagramUser
		})
	}

	render() {
		return (
			<div className="App">
				<h1 style={{ 'font-size': '50px', 'font-weight': '400' }}>Instagram</h1>
				<SearchBar />
				<PostContainer posts={this.state.posts} />
			</div>
		)
	}
}

export default App
