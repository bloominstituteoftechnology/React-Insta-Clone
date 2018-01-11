import React, { Component } from 'react';
import './CommentSection.css';
// import { dummyData } from '/Users/e144574/Desktop/Camila Programming/LAMBDA/CS 6/week4/React-II/instagram/src/dummy-data.js';

class CommentSection extends Component {
	constructor() {
		super();
		this.state = {
			// data: dummyData,
			comments: []
		}
	}

	componentDidMount() {
		this.setState({
			comments: []
		});
	}

	render() {
		return (
			<div>
				<form>
					<input type="text" onChange={this.componentDidMount} placeholder="Add a comment..."/>
				</form>
			</div>
		);
	}
}

export default CommentSection;