import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';


const Post = props => {
    return (
        <div className="post-header">
            <PostHeader
                username={props.post.username}
                thumbnailUrl={props.post.thumbnailUrl}
            />
            <div>
                <img src={props.post.imageUrl} className="post-image" alt="" />
            </div>
            <CommentSection comments={props.post.comments} />
            
            
        </div>
    );
};

export default Post;