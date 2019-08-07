import React, { Component } from 'react'
import PostsPage from './components/PostComponents/PostPage'
import LoginPage from './components/LoginComponent/Login'
import Authenticate from './components/Authentication/Authenticate'
import './App.css'

class App extends Component {
	constructor() {
		super();
		this.state = {}
	}

	render() {
		return (
			<div className="App">
				<ConditionalView />
			</div>
		)
	}
}

const ConditionalView = Authenticate(PostsPage)(LoginPage)

export default App
