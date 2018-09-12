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

	addLikes = () => {
		let likes = this.state.likes + 1;
	};

	render() {
		return (
			<div>
				{this.state.comments.map((comment) => (
					<Comments key={comment.username} comment={comment} />
				))}
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
