import React from 'react';
import Authenticate from './HOC/Authentication/Authenticate.js';
import PostsPage from './components/PostsPage/PostsPage.js';
import './App.css';

export const App = () => {
	return (
		<div className="App">
			<PostsPage />
		</div>
	);
};

export default Authenticate(App);
