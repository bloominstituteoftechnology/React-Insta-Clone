import React from 'react';

import PostHeader from './PostHeader';
import PostFooter from './PostFooter';

function PostCard(props) {
	console.log('* ' + props.post.username );
	return (
    	<div className="post-container">
    		<PostHeader username={props.post.username} imgSrc={props.post.thumbnailUrl} /> 
    		<img className="post-image" src={props.post.imageUrl} ></img>
    		<PostFooter post={props.post} />
    	</div>
  	);
}

export default PostCard;