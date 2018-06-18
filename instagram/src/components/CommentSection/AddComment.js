import React, { Component } from 'react';

class AddComment extends Component {
	render() {
		return (
			<div className="add-comment">
				<form className="comment-form" onSubmit={this.props.onCommentSubmit}>
					<input placeholder="Add a comment..." />
				</form>
			</div>
		);
	}
}

export default AddComment;