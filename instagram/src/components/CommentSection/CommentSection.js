import React, { Component } from 'react';
import './CommentSection.css';
// import { dummyData } from '/Users/e144574/Desktop/Camila Programming/LAMBDA/CS 6/week4/React-II/instagram/src/dummy-data.js';
import App from '../../App.js';

class CommentSection extends Component {
	constructor(props) {
		super();
		this.state = {
			comments: [],
			username: 'camila'
		}
	}

	componentDidMount() {
		this.setState({
			comments: this.props.comments
		})
	}

	render() {
		return (
			<div>
				{this.props.comments.map((comment) => {
					return(
						<div className="CommentSection_container">
							<p className="CommentSection_thread"><strong>{comment.username}</strong> {comment.text}</p>
						</div>
					)
				})}
			</div>
		)
	}
}

export default CommentSection;