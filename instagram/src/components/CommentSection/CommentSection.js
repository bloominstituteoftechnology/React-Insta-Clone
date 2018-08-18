import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
// styles
import "./CommentSection.css";

class CommentSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: this.props.commentList,
			username: "Guest",
			newComment: ""
		};
	}

	// handle new comments being typed in
	handleNewComment = event => {
		this.setState({ newComment: event.target.value });
		console.log(event.target.value);
	};

	// add new comments to a post's list of comments
	addNewComment = () => {
		const commentBox = this.state.comments;
		commentBox.push({
			username: this.state.username,
			text: this.state.newComment
		});
		this.setState({ comments: commentBox, newComment: "" });
	};

	render() {
		return (
			<div>
				{this.state.comments.map((comment, index) => (
					<div key={index}>
						<strong>{comment.username}</strong> {comment.text}
					</div>
				))}
				<div>
					<p className="timeStamp">
						{/* render timestamp of most recent comment made */}
						<span>{moment().calendar()}</span>
					</p>
					<hr />
					<form className="CommentSection_form">
						<input
							className="CommentSection_input border-top-0 border-right-0 border-left-0 border-bottom-0 py-4"
							type="text"
							name="newComment"
							value={this.state.newComment}
							onChange={this.handleNewComment}
							onClick={this.addNewComment}
							placeholder="Add a comment..."
						/>
					</form>
				</div>
			</div>
		);
	}
}

CommentSection.propTypes = {
	commentList: PropTypes.array.isRequired
};

export default CommentSection;
