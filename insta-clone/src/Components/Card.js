import React, { Component } from "react";
import "./Card.css";
import Comments from "./Comments";
import PropTypes from "prop-types";
import {StyledCard, Card__header, Card__thumbnail, Card__username, Card__bannerImg,
		Card__icons,Card__likes,} from "./CardStyle";

class Card extends Component {
	constructor(props){
		super(props)
	}
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
			<StyledCard>
				<Card__header>
					<Card__thumbnail
						src={thumbnailUrl}
						alt=""
					/>
					<Card__username>{ username }</Card__username>
				</Card__header>
				<div className="Card__banner">
					<Card__bannerImg src={ imageUrl } alt="" />
				</div>
				<Card__icons>
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
				</Card__icons>
				<Card__likes> { likes } likes </Card__likes>
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
			</StyledCard>
		);
	}
}

Card.propTypes = {
	id: PropTypes.number.isRequired,
	username: PropTypes.string.isRequired,
	thumbnailUrl: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	likes: PropTypes.number.isRequired,
	liked: PropTypes.bool.isRequired,
	timestamp: PropTypes.string.isRequired,
	comments: PropTypes.string.isRequired,
	onAddComment: PropTypes.func.isRequired,
	onDeleteComment: PropTypes.func.isRequired,
	onAddLike: PropTypes.func.isRequired
};

export default Card;
