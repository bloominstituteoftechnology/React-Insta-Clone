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
		event.preventDefaul();
		let likes = this.state.likes + 1;
		this.setState({ likes });
	};

	render() {
		return (
			<div className="comment-wrapper">
				<div className="comment-icons">
					<div className="comment-sprite" id="heart" onClick={this.addLikes} />
					<div className="comment-sprite" id="comment-blob" />
				</div>
				<div className="comment-likes">
					<p>{this.state.likes}</p>
				</div>
				<div>
					{this.state.comments.map((comment) => (
						<Comments key={comment.username} comment={comment} />
					))}
				</div>
			</div>
		);
	}
}

CommentSection.propTypes = {
	timestamp: PropTypes.string,
	comments: PropTypes.string,
	like: PropTypes.number,
};

export default CommentSection;
