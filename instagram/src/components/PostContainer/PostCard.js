import React from 'react';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import PostBody from './PostBody';

//<img className="post-image" src={props.post.imageUrl} ></img>

function PostCard(props) {
	return (
    	<div className="post-container">
    		<PostHeader username={props.post.username} imgSrc={props.post.thumbnailUrl} /> 
    		<PostBody postImageUrl={props.post.imageUrl} />
    		<PostFooter post={props.post} />
    	</div>
  	);
}

export default PostCard;