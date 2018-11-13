import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    return (
        <div className="post-container">
            <PostHeader post username={props.post.username} thumbnailUrl={props.post.thumbnailUrl} />

            <div className="post-contents">
                <img src={props.post.imageUrl} alt="post content" />
            </div>

            <div className="post-bottom-section">
                <div className="post-icons">
                    <img src="#" alt="Likes icon" />
                    <img src="#" alt="Comment icon" />
                </div>

                <div className="likes-counter">{props.post.likes} likes</div>
            </div>

            <CommentSection comments={props.post.comments} />
        </div>
    )
}

export default Post;