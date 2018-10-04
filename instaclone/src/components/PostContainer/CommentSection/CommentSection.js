import React, { Component } from 'react';
import './CommentSection.css';
import AddComment from './AddComment';

class CommentSection extends Component {
	render() {
		return (
			<div>
				{this.props.comment.map(item => {
					return (
						<div>
							<h3 className="comment">
								{item.username}:{' '}
								<span className="commentText">{item.text}</span>
							</h3>
						</div>
					);
				})}
				<p className="postTime">Posted: {this.props.time}</p>
				<AddComment />
			</div>
		);
	}
}

export default CommentSection;
