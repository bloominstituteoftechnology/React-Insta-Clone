import React from 'react';
import Authenticate from './components/Authentication/Authenticate';
import PostsPage from './components/PostContainer/PostsPage';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="App">
				<PostsPage />
			</div>
		);
	}
}

export default Authenticate(App);
