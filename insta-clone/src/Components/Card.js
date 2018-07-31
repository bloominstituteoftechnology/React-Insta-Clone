import React from "react";
import "./Card.css";
import Comments from "./Comments";
import PropTypes from "prop-types";

class Card extends React.Component {
	state = {
		input: ""
	};

	bubbleRef = React.createRef();

	handleChanges = input => {
		this.setState({ input });
	};

	render() {
		const {
			id,
			username,
			thumbnailUrl,
			imageUrl,
			likes,
			liked,
			timestamp,
			comments,
			onAddComment,
			onDeleteComment,
			onToggleLike
		} = this.props;
		return (
			<section className="Card">
				<div className="Card__header">
					<img
						className="Card__thumbnail"
						src={thumbnailUrl}
						alt=""
					/>
					<span className="Card__username">{username}</span>
				</div>
				<div className="Card__banner">
					<img className="Card__banner-img" src={imageUrl} alt="" />
				</div>
				<div className="Card__icons">
					<i
						onClick={() => onToggleLike(id, !liked)}
						class={`far fa-heart ${
							liked ? "Card__icons--liked" : ""
						}`}
					/>
					<i
						class="far fa-comment Card__icons--bubble"
						onClick={() => this.bubbleRef.current.focus()}
					/>
				</div>
				<div className="Card__likes">{likes} likes</div>
				<Comments
					{...{ timestamp, comments }}
					onDeleteComment={comment => onDeleteComment(id, comment)}
				/>
				<div className="Card__input-wrapper">
					<input
						ref={this.bubbleRef}
						value={this.state.input}
						onChange={e => this.handleChanges(e.target.value)}
						className="Card__input"
						type="text"
						placeholder="Add a comment..."
						onKeyDown={e => {
							if (e.key === "Enter") {
								onAddComment(id, this.state.input);
								this.setState({ input: "" });
							}
						}}
					/>
					<i class="fas fa-ellipsis-h" />
				</div>
			</section>
		);
	}
}

Card.propTypes = {
	id: PropTypes.number.isRequired,
	username: PropTypes.string.isRequired,
	thumbnailUrl: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	likes: PropTypes.number.isRequired,
	lies: PropTypes.bool.isRequired,
	timestamp: PropTypes.number.isRequired,
	comments: PropTypes.string.isRequired,
	onAddComment: PropTypes.func.isRequired,
	onDeleteComment: PropTypes.func.isRequired,
	onAddLike: PropTypes.func.isRequired
};

export default Card;
