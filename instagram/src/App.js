import React, { Component } from 'react'
import './App.css'
import PostContainer from './Components/PostContainer/PostContainer'
import dummyData from './dummy-data'
import CommentSection from './Components/CommentSection/CommentSection'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			posts: []
		}
	}

	componentDidMount() {
		this.setState({
			posts: dummyData
		})
	}

	render() {
		return (
			<div className="App">
				<h1>Insta Clone</h1>
				<PostContainer posts={this.state.posts} />
			</div>
		)
	}
}

export default App
