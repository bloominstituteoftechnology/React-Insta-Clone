import React from 'react';
import PropTypes from 'prop-types';
const CommentSection = (props) => {
	return (
		<div>
			{props.comments.map((comment, i) => (
				<div key={i}>
					{comment.username} {comment.text}
				</div>
			))}
		</div>
	);
};
CommentSection.PropTypes = {
	comment: PropTypes.shape({
		username: PropTypes.string,
		text: PropTypes.string
	})
};
export default CommentSection;

// import React from 'react';
// import CommentInput from './CommentInput';

// class CommentSection extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			comments: props.comments,
// 			comment: ''
// 		};
// 	}
// 	commentHandler = (event) => {
// 		this.setState({ comment: event.target.value });
// 	};

// 	render() {
// 		return (
// 			<div>
// 				{this.state.comments.map((comment, i) => (
// 					<div key={i} comment={comment}>
// 						{comment.text} {comment.username}
// 					</div>
// 				))}
// 				<CommentInput comment={this.state.comment} changeComment={this.commentHandler} />
// 			</div>
// 		);
// 	}
// }
// export default CommentSection;
