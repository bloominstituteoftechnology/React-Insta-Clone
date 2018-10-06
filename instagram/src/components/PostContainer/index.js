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
						<CommentMap comments = {userPost.comments} />
						<div className='post-time'>
							<p>{userPost.timestamp}</p>
						</div>

						<div className='comment-bar'>
							<input type='text' placeholder='Add a comment' />
							<button>&#8230;</button>
						</div>
					</div>
				)})}
		</div>
    )
}

export default PostContainer;