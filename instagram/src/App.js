import React, { Component } from 'react'
import './App.css'
import PostContainer from './Components/PostContainer/PostContainer'
import dummyData from './dummy-data'

class App extends Component {
	constructor() {
		super()
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
