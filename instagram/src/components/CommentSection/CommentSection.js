import React, { Component } from 'react';
import '../../less/Comments.less';
import PropTypes from 'prop-types';

class CommentSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: props.comments,
			commentInput: '',
			username: props.username,
			text: props.text
		};
	}
	handleChange = (event) => {
		event.preventDefault();
		this.setState({
			commentInput: event.target.value
		});
	};

	addComment = (event) => {
		event.preventDefault();
		this.setState({
			comments: [
				...this.state.comments,
				{
					username: 'cotikor',
					text: this.state.commentInput
				}
			],
			commentInput: ''
		});
	};

	render() {
		return (
			<React.Fragment>
				<section className="comments">
					{this.state.comments.map((comment, index) => (
						<div className="comment" key={index}>
							<h3>
								<span>{comment.username}</span> {comment.text}
							</h3>
						</div>
					))}
				</section>
				<form
					onSubmit={(event) => {
						this.addComment(event);
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
			</React.Fragment>
		);
	}
}

CommentSection.propTypes = {
	comments: PropTypes.arrayOf(
		PropTypes.shape({
			username: PropTypes.string,
			text: PropTypes.string
		}).isRequired
	),
	commentInput: PropTypes.string,
	AddComment: PropTypes.func,
	handleChange: PropTypes.func
};

export default CommentSection;
