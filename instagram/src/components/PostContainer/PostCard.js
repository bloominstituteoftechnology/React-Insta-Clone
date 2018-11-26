import React, { Component } from 'react';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import PostBody from './PostBody';

function incrementPostLikes(post){
	post.likes = post.likes + 1;
	return post;
}

function decrementPostLikes(post){
	post.likes = post.likes - 1;
	return post;
}

class PostCard extends Component {
	constructor(props) {
    	super();
    	this.onLikeClick = this.onLikeClick.bind(this);
    	this.state = {
      		post: props.post,
      		hasCurrentUserLikedPost: false
    	};
  	}

  	onLikeClick(){
  		console.log('any click');
  		if(!this.state.hasCurrentUserLikedPost){
  			console.log('increment');
	  		this.setState({
				post: incrementPostLikes(this.state.post),
				hasCurrentUserLikedPost: true
		    });
		}else{
			console.log('decrement');
			this.setState({
				post: decrementPostLikes(this.state.post),
				hasCurrentUserLikedPost: false
		    });
		}
  	}

	render () {
		return (
	    	<div className="post-container">
	    		<PostHeader username={this.state.post.username} imgSrc={this.state.post.thumbnailUrl} /> 
	    		<PostBody postImageUrl={this.state.post.imageUrl} />
	    		<PostFooter post={this.state.post} onClick={this.onLikeClick}/>
	    	</div>
	  	);
	}
}

export default PostCard;