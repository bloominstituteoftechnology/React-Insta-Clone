import React, { Component } from 'react';
import './CommentSection.css';
// import { dummyData } from '/Users/e144574/Desktop/Camila Programming/LAMBDA/CS 6/week4/React-II/instagram/src/dummy-data.js';
import App from '../../App.js';

class CommentSection extends Component {
	constructor(props) {
		super();
		this.state = {
			comments: [],
			username: 'camila',
			newComment: ''
		}
		this.addNewComment = this.addNewComment.bind(this);
		this.handleComment = this.handleComment.bind(this);
	}

	componentDidMount() {
		this.setState({
			comments: this.props.comments
		})
	}

	addNewComment(event) {
		event.preventDefault();
		this.state.comments.push({
			username: this.state.username,
			text: this.state.newComment
		});
		this.setState({
			newComment: '',
			comments: this.state.comments
		});
	}

	handleComment(event) {
		this.setState({
			newComment: event.target.value
		})
	}

	render() {
		return (
			<div className="CommentSection_container">
				{this.props.comments.map((comment) => {
					return(
						<p className="CommentSection_thread"><strong>{comment.username}</strong> {comment.text}</p>
					)
				})}
				<p className="CommentSection_timestamp">6 MONTHS AGO</p>
				<form className="CommentSection_form" onSubmit={this.addNewComment}>
					<input type="text" onChange={this.handleComment} placeholder="Add a comment..." value={this.state.newComment}/>
				</form>
			</div>
		)
	}
}

export default CommentSection;