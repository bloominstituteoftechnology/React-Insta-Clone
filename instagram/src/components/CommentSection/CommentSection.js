import React from 'react';
import Comment from '../Comment/Comment';
import './CommentSection.css';

class CommentSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: props.comments
		};
	}

	render() {
		return (
			<div className="CommentSection">
				{this.state.comments.map(comment => (
					<Comment
						key={
							comment.username +
							': ' +
							Date.now() +
							Math.round(Math.random() * 1000)
						}
						comment={comment}
					/>
				))}
			</div>
		);
	}
}

export default CommentSection;
