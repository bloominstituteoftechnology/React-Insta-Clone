import React from "react";

class Likes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			post: props.post,
			likes: props.post.likes,
			like: "",
			liked: false
		};
	}

	addLike = () => {
		let likes = this.state.likes + 1;
		// finalLike = copiedLikes + newLike;
		this.setState({ likes });
	};

	render() {
		return (
			<div className='iconslikes'>
				<div className='icons'>
					<i className='far fa-heart' onClick={this.addLike} />
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
