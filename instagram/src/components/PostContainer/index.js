import React from 'react';
import CommentMap from '../CommentSection/CommentMap';
import SinglePost from './SinglePost.js';
import './index.css';

const PostContainer = props => {
    return (
		<div>
			{props.data.map((userPost) => {
				return (
					<div className='post-container'>
						<SinglePost userData={userPost} />
						<CommentMap comments = {userPost.comments} userData={userPost}/>
					</div>
				)})}
		</div>
    )
}

export default PostContainer;