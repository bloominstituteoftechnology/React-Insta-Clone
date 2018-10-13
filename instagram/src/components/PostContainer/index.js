import React from 'react';
import CommentMap from '../CommentSection/CommentMap';
import SinglePost from './SinglePost.js';
import './index.css';

const PostContainer = props => {
    return (
		<div>
			{props.data.map((userPost, i) => {
				return (
					<div className='post-container' key={ userPost.username + userPost.timestamp }>
						<SinglePost userData={userPost} />
						<CommentMap comments = {userPost.comments} userData={userPost} postIndex={i} />
					</div>
				)})}
		</div>
    )
}

export default PostContainer;