import React from "react";
import "./Card.css";
import Comments from "./Comments";

class Card extends React.Component {
	state = {
		input: ""
	};

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
			timestamp,
            comments,
            onAddComment,
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
					<i class="far fa-heart" />
					<i class="far fa-comment" />
				</div>
				<div className="Card__likes">{ likes } likes</div>
				<Comments {...{ timestamp, comments }} />
				<div className="Card__input-wrapper">
					<input
						value={this.state.input}
						onChange={ e => this.handleChanges( e.target.value ) }
						className="Card__input"
						type="text"
						placeholder="Add a comment..."
                        onKeyDown={ e => {
                            if (e.key === 'Enter') {
                                onAddComment(id, this.state.input);
                                this.setState({input: ''});
                            }
                        }}
					/>
					<i class="fas fa-ellipsis-h" />
				</div>
			</section>
		);
	}
}

export default Card;
