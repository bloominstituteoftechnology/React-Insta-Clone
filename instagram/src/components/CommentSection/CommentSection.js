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
		this.setState({
			likes: this.state.likes + (this.state.youLiked ? -1 : 1),
			youLiked: !this.state.youLiked
		});
		!this.state.youLiked
			? localStorage.setItem(this.props.id + ' Liked', true)
			: localStorage.removeItem(this.props.id + ' Liked');
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
					username: localStorage.getItem('username'),
					text: event.target.children[0].value,
					id: localStorage.getItem('username') + '/' + Date.now()
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
			likes:
				this.props.likes +
				(localStorage.getItem(this.props.id + ' Liked') ? 1 : 0),
			youLiked: localStorage.getItem(this.props.id + ' Liked') ? true : false
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
