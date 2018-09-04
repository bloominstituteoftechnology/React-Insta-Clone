import React from 'react';
import Comment from '../Comment/Comment';
import Moment from 'moment';
import './CommentSection.css';

class CommentSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: [],
			likes: 0
		};
	}

	addNewComment = (event, index) => {
		let comments = [...this.state.comments];

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
					<button id="like" className="sprite-glyph" />
					<button id="comment" className="sprite-glyph" />
				</div>

				<a href="/" className="likes">
					{this.state.likes + ' likes'}
				</a>
				<div className="comments">
					{this.state.comments.map(comment => (
						<Comment
							key={
								comment.username +
								'/' +
								Date.now() +
								'/' +
								Math.round(Math.random() * 1000)
							}
							comment={comment}
						/>
					))}
				</div>

				<a href="/" className="time">
					{Moment(this.props.timestamp, 'MMM Do YYYY, hh:mm:ss a')
						.fromNow()
						.toUpperCase()}
				</a>

				<div className="response">
					<form action="/" className="add-comment">
						<div
							className="fake-textarea"
							contentEditable
							placeholder="Add a comment..."
						/>
					</form>
					<button id="options" className="sprite-glyph" />
				</div>
			</section>
		);
	}
}

export default CommentSection;
