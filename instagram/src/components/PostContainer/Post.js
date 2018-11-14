import React, {Component} from 'react';
import like from '../../like.png';
import comment from '../../comment.png';
import PropTypes from 'prop-types';

class Post extends Component{
	constructor(props){
		super(props);
		this.state = {
			post: props.post,
			username: props.username,
			thumbnail: props.thumbnail,
			timestamp: props.timestamp,
			image: props.image,
			likes: props.likes
		}
	}
	handleLike = (event) => {
		event.preventDefault();
		let likeCount = this.state.likes
		this.setState({
			likes: likeCount += 1
		});
	}
	
	render (){
		return (
			<React.Fragment>
				<section className="top">
					<div>
						<img src={this.state.thumbnail} alt="" />
						<h3>{this.state.username}</h3>
					</div>
	
					<h4>{this.state.timestamp}</h4>
				</section>
				<section className="middle">
					<img src={this.state.image} alt="" />
				</section>
				<section className="bottom">
					<div className="icons">
						<img src={like} alt="like icon" onClick={(event) => {this.handleLike(event)}} />
						<img src={comment} alt="comment icon"  />
					</div>
					<h3>
						<span>{this.state.likes}</span> likes
					</h3>
				</section>
			</React.Fragment>
		);
	}

};

Post.propTypes = {
	posts: PropTypes.shape({
			username: PropTypes.string.isRequired,
			thumbnailUrl: PropTypes.string.isRequired,
			imageUrl: PropTypes.string.isRequired,
			likes: PropTypes.number,
			timestamp: PropTypes.string.isRequired,
	}).isRequired,
	handleLike: PropTypes.func	
}	
export default Post;
