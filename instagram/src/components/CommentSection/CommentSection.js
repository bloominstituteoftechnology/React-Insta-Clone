import React from 'react';
import Comment from '../Comment/Comment';
import Moment from 'moment';
import './CommentSection.css';

class CommentSection extends React.Component {
	constructor(props) {
		super(props);
		this.commentInput = React.createRef();
		this.state = {
			comments: [],
			likes: 0,
			youLiked: false
		};
	}

	toggleLiked = () => {
		let likes = this.state.likes;
		this.state.youLiked === false
			? this.setState({
					likes: likes + 1
			  })
			: this.setState({
					likes: likes - 1
			  });
		this.setState({
			youLiked: !this.state.youLiked
		});
	};

	focusCommentInput = () => {
		this.commentInput.current.focus();
	};

	addNewComment = event => {
		event.preventDefault();
		if (event.target.children[0].value) {
			const comments = [
				...this.state.comments,
				{
					username: 'You',
					text: event.target.children[0].value,
					id: 'You' + '/' + Date.now()
				}
			];
			this.setState({
				comments
			});
			event.target.reset();
			event.target.children[0].blur();
		}
	};

	deleteComment = id => {
		let comments = [...this.state.comments];
		const index = comments.findIndex(comment => comment.id === id);
		comments.splice(index, 1);
		this.setState({
			comments
		});
	};

	componentDidMount() {
		this.setState({
			comments: this.props.comments,
			likes: this.props.likes
		});
	}

	render() {
		return (
			<section className="CommentSection">
				<div className="actions">
					<button
						id="like"
						className="sprite-glyph"
						onClick={this.toggleLiked}
					/>
					<button
						id="comment"
						className="sprite-glyph"
						onClick={this.focusCommentInput}
					/>
				</div>

				<a href="/" className="likes">
					{this.state.likes + ' likes'}
				</a>
				<div className="comments">
					{this.state.comments.map(comment => (
						<Comment
							key={
								comment.username + '/' + +Math.round(Math.random() * 1000000)
							}
							comment={comment}
							addNewComment={this.addNewComment}
							deleteComment={this.deleteComment}
						/>
					))}
				</div>

				<a href="/" className="time">
					{Moment(this.props.timestamp, 'MMM Do YYYY, hh:mm:ss a')
						.fromNow()
						.toUpperCase()}
				</a>

				<div className="response">
					<form onSubmit={this.addNewComment} className="add-comment">
						{/* Expands like Instagram's textarea
							<div
							className="fake-textarea"
							contentEditable
							placeholder="Add a comment..."
						/> */}
						<input
							className="comment-input"
							type="text"
							placeholder="Add a comment..."
							ref={this.commentInput}
						/>
					</form>
					<button id="options" className="sprite-glyph" />
				</div>
			</section>
		);
	}
}

export default CommentSection;
