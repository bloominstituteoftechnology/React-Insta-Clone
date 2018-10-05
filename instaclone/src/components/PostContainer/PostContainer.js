import React, { Component } from 'react';
import './PostContianer.css';
import PostHeader from './PostHeader/PostHeader';
import CommentSection from './CommentSection/CommentSection';

class PostContainer extends Component {
	render() {
		return this.props.appData.map(post => {
			return (
				<div key={post.username}>
					<div className="postContainer">
						<PostHeader
							profileImage={post.thumbnailUrl}
							userName={post.username}
						/>
						<img
							id="mainPost"
							src={post.imageUrl}
							alt={post.username + 'image'}
						/>
            <CommentSection
              key={post.username}
							likes={post.likes}
							comment={post.comments}
							time={post.timestamp}
						/>
					</div>
				</div>
			);
		});
	}
}

export default PostContainer;
