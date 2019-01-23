// import React from 'react';
// import PropTypes from 'prop-types';
// const CommentSection = (props) => {
// 	return (
// 		<div>
// 			{props.comments.map((comment, i) => (
// 				<div key={i}>
// 					{comment.username} {comment.text}
// 				</div>
// 			))}
// 		</div>
// 	);
// };
// CommentSection.PropTypes = {
// 	comment: PropTypes.shape({
// 		username: PropTypes.string,
// 		text: PropTypes.string
// 	})
// };
// export default CommentSection;

import React from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: props.comments,
			comment: ''
		};
	}

	setComments = () => {
		localStorage.setItem(this.props.postId, JSON.stringify(this.state.comments));
	};
	componentWillUnMount() {
		this.setComments();
	}
	commentSubmit = (event) => {
		event.preventDefault();
		const newComment = { text: this.state.comment };
		const comments = { ...this.state.comments, newComment };
		this.setState({ comments, comment: '' });
	};
	commentHandler = (event) => {
		this.setState({ comment: event.target.value });
	};
	render() {
		return (
			<div>
				<div>{this.state.comments.map((comment, i) => <Comment key={i} comment={comment} />)}</div>
				<CommentInput
					comment={this.state.comment}
					commentSubmit={this.commentSubmit}
					changeComment={this.commentHandler}
				/>
			</div>
		);
	}
}

CommentSection.propTypes = {
	comments: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string,
			username: PropTypes.string
		})
	)
};
export default CommentSection;
