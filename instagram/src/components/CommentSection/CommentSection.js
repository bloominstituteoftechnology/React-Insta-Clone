import React from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import "./CommentSection.css";

class CommentSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: props.comments,
			timestamp: props.timestamp,
			comment: ""
		};
	}

	addComment = comment => {
		const copiedComments = this.state.comments.slice();
		const newComment = {
			id: Date.now(),
			username: "omar_okla",
			text: comment
		};
		copiedComments.push(newComment);
		this.setState({ comments: copiedComments });
		console.log(
			"From CommentSection, Comment array you are adding into: ",
			this.state.comments
		);
	};

	render() {
		return (
			<div className='commentSection'>
				{this.state.comments.map(comment => (
					<Comment comment={comment} key={comment.id} />
				))}

				<div className='timestamp'>
					<p>{this.state.timestamp}</p>
				</div>
				<CommentInput addComment={this.addComment} props={this.state} />
			</div>
		);
	}
}

export default CommentSection;
