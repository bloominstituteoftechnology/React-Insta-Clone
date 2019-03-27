import React from "react";
import "./Likes.css";

class Likes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			post: props.post,
			likes: props.post.likes,
			liked: false
		};
	}

	likeHandler = () => {
		if (this.state.liked === false) {
			this.addLike();
			this.state.liked = !this.state.liked;
		} else {
			this.subLike();
			this.state.liked = !this.state.liked;
		}
	};

	addLike = () => {
		let likes = this.state.likes + 1;
		this.setState({ likes });
	};

	subLike = () => {
		let likes = this.state.likes - 1;
		this.setState({ likes });
	};

	render() {
		return (
			<div className='iconslikes'>
				<div className='icons'>
					<i
						className={
							this.state.liked === true ? "fas fa-heart liked" : "far fa-heart"
						}
						onClick={this.likeHandler}
					/>
					<i className='far fa-comment' />
				</div>
				<div className='likes'>
					<p>{`${this.state.likes}` + " likes"}</p>
				</div>
			</div>
		);
	}
}

export default Likes;
