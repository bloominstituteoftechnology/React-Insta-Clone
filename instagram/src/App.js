import React from 'react';
import './less/App.less';
import PostsPage from './components/PostContainer/PostsPage';

const App = props => {
	
		return (
			<div className="App">
        <PostsPage />
			</div>
		);
}

export default App;

