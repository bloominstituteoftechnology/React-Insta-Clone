import React, {Component} from 'react';
import like from '../../like.png';
import comment from '../../comment.png';
import PropTypes from 'prop-types';

class Post extends Component{

	constructor(props){
		super(props);
		this.state = {
			likes: props.likes
		}
	}
	handleLike = (event) => {
		event.preventDefault();
		let likeCount = this.state.likes
		likeCount += 1
		this.setState({
			likes: likeCount
		});
	}
	
	
	
	render (){
		return (
			<React.Fragment>
				<section className="top">
					<div>
						<img src={this.props.thumbnail} alt="" />
						<h3>{this.props.username}</h3>
					</div>
	
					<h4>{this.props.timestamp}</h4>
				</section>
				<section className="middle">
					<img src={this.props.image} alt="" />
				</section>
				<section className="bottom">
					<div className="icons">
						<img src={like} alt="like icon" onClick={this.handleLike} />
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
