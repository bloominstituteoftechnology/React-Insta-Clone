import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostsContainer/PostsPage';
import Authenthicate from './components/Authentication/Authenthicate';

class App extends Component {
	render() {
		return <PostsPage />;
	}
}

export default Authenthicate(App);
