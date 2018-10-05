import React, { Component } from 'react';
import './CommentSection.css';

class ActualComment extends Component {
	render() {
		return (
			<div className="comment">
				<h3>
					{this.props.commentData.username}:{' '}
					<span className="commentText">{this.props.commentData.text}</span>{' '}
				</h3>
			</div>
		);
	}
}

export default ActualComment;
