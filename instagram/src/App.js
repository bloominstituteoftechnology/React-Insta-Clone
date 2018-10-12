import React from 'react';
import './App.css';
import Authenticate from './components/Authentication';
import PostsPage from './PostsPage';

class App extends React.Component {
	constructor () {
		super();
		this.state = {
			data: [],
		};
	}

	render() {
		return (
			<div className="App">
				<PostsPage data={this.state.data} />
			</div>
		);
	}
}

export default Authenticate(App);