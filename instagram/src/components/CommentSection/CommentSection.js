import React from 'react';
import PropTypes from 'prop-types';
import Comments from './Comments';
import './CommentSection.css';

class CommentSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timestamp: props.timestamp,
			comments: props.comments,
			likes: props.likes,
			comment: '',
		};
	}

	handleInput = (event) => {
		event.preventDefault();
		this.setState({ [event.target.name]: event.target.value });
	};

	addNewComment = (event) => {
		const newComment = {
			username: 'MicahShrak',
			text: this.state.comment,
		};
		this.setState({
			comments: [...this.state.comments, newComment],
			comment: '',
		});
		event.prevendDefault();
	};

	addLikes = (event) => {
		this.state.likes + 1;
	};

	render() {
		return (
			<div className="comment-section">
				{this.state.comments.map((comment) => {
					return <Comments key={comment.username} comment={comment} />;
				})}
				<div>{this.state.timestamp}</div>
				<div className="comments-users">
					<form onSubmit={this.addNewComment} onChange={this.handleInput}>
						<input
							className="comment-input"
							name="commentInput"
							type="text"
							placeholder="Add a comment..."
							value={this.state.newComment}
						/>
					</form>
				</div>
			</div>
			/* <div>
				{this.state.comments.map((comment) => (
					<Comments key={comment.username} comment={comment} />
				))}
			</div> */
		);
	}
}

CommentSection.propTypes = {
	timestamp: PropTypes.string,
	likes: PropTypes.number,
	comments: PropTypes.arrayOf(
		PropTypes.shape({
			username: PropTypes.string,
			text: PropTypes.string,
		})
	),
};

export default CommentSection;
