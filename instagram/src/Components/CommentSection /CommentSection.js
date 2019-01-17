// import React from 'react';

// const CommentSection = (props) => {
// 	return (
// 		<div>
// 			{props.comments.map((comment) => (
// 				<div key={comment.timestamp} comment={comment}>
// 					{comment.username} {comment.text}
// 				</div>
// 			))}
// 		</div>
// 	);
// };
// export default CommentSection;

import React from 'react';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: props.comments,
			comment: ''
		};
	}
	commentHandler = (event) => {
		this.setState({ comment: event.target.value });
	};

	render() {
		return (
			<div>
				{this.state.comments.map((comment) => (
					<div key={comment.timestamp} comment={comment}>
						{comment.text} {comment.username}
					</div>
				))}
				<CommentInput comment={this.state.comment} changeComment={this.commentHandler} />
			</div>
		);
	}
}
export default CommentSection;
