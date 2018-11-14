import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewComment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: props.comments,
			commentInput: props.commentInput,
			addComment: props.addComment
		};
	}

	handleChange = (event) => {
		event.preventDefault();
		this.setState({
			commentInput: event.target.value
		});
	};

	render() {
		return (
			<form
				onSubmit={(event, index) => {
					this.state.addComment(event, index);
				}}
			>
				<input
					type="text"
					name="commentInput"
					placeholder="Add a comment ..."
					value={this.state.commentInput}
					onChange={(event) => {
						this.handleChange(event);
					}}
				/>
			</form>
		);
	}
}

NewComment.propTypes = {
	comments:  PropTypes.arrayOf(
		PropTypes.shape({
			username: PropTypes.string,
			text: PropTypes.string
		}).isRequired),
	commentInput: PropTypes.string,
	AddComment: PropTypes.func,
	handleChange: PropTypes.func
};

export default NewComment;
