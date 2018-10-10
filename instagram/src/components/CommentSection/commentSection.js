import React from 'react';
import './commentsection.css';
import Comment from './Comment';
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
	state = {
		comments: [],
		newCommentText: '',
		likes: 0
	};

	componentDidMount() {
		this.setState({ comments: this.props.comments, likes: this.props.likes });
	}

	onChange = e => {
		this.setState({ newCommentText: e.target.value });
	};

	addComment = () => {
		const username = 'Rob';
		const text = this.state.newCommentText;
		this.setState({
			comments: [...this.state.comments, { username, text }],
			newCommentText: ''
		});
	};

	likePost = () => {
		this.setState({ likes: this.state.likes + 1 });
	};
	render() {
		return (
			<div className="comments-section">
				<img
					onClick={this.likePost}
					className="loveheart"
					src={require('../assets/loveheart.png')}
					alt={'loveheart'}
				/>
				<img
					onClick={this.addComment}
					className="comment"
					src={require('../assets/comment.png')}
					alt={'comment'}
				/>
				<p className="likes">
					{this.state.likes}
					likes
				</p>
				{this.state.comments.map(comment => {
					return (
						<>
							<Comment comment={comment} />
						</>
					);
				})}
				<div>
					<input
						className="comment-input"
						placeholder="Add a comment..."
						value={this.state.newCommentText}
						onChange={this.onChange}
					/>
				</div>
			</div>
		);
	}
}

CommentSection.propTypes = {
	comments: PropTypes.arrayOf(PropTypes.object),
	likes: PropTypes.number
};

export default CommentSection;
