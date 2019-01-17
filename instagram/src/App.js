import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer';
// console.log(dummyData);
// import './App.css';
import CommentSection from './Components/CommentSection';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dummyData,
			commnet: ''
		};
		this.commentInput = this.commentInput.bind(this);
	}
	commentInput = (e) => {
		this.setState({ comment: e.target.value });
	};

	render() {
		return (
			<div className="App">
				<PostContainer />
				<CommentSection />
			</div>
		);
	}
}

export default App;
