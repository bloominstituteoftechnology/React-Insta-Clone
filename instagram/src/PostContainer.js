import React from 'react';
import './PostContainer.css';
import { Comments } from './Comments';

export const PostContainer = (props) => {
	return(
		<div className='PostContainer-Wrapper'>
			<b>{props.postData.username}</b>
			<img alt='' src={props.postData.imageUrl} />
			<h4>likes</h4><p>{props.postData.likes}</p>
			<p>{props.postData.timestamp}</p>
			<Comments comments={props.postData.comments} />
		</div>
	)
}