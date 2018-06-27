import React, { Component } from 'react';
import Comment from './Comment';
import './Comment.css'

class CommentsList extends Component {
	constructor(props){
		super(props);
	}
	render() {
		return (
			<div className="comment-list">
				{
					this.props.comments.map(comment => {
						return <Comment key={Math.random()} comment={comment} />
					})
				}
			</div>
		);
	}
}

export default CommentsList;