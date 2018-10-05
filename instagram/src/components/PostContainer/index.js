import React from 'react';
import CommentSection from '../CommentSection';
import PropTypes from 'prop-types';
import SinglePost from './SinglePost.js';

const PostContainer = props => {
    return (
		<div>
			{props.data.map((userPost) => {
				return (
					<div className='post-container'>
						<SinglePost userData={userPost} />
						<CommentSection comments = {userPost.comments} />
					</div>
				)})}
		</div>
    )
}

export default PostContainer;