import React from 'react';
import PostHeader from './PostHeader.js';
import CommentSection from '../CommentSection/CommentSection.js';

const PostContainer = props => {
    return (
        <div>
            <PostHeader username={props.post.username} thumbnailUrl={props.post.thumbnailUrl} />
            <div>
                <img src={props.post.imageUrl} />
            </div>
            <CommentSection comments={props.post.comments} />
        </div>
    );
}

export default PostContainer;