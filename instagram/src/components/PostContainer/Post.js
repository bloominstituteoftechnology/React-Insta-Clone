import React from 'react';

import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import CommentInput from '../CommentSection/CommentInput';
import LikesSection from '../CommentSection/LikesSection';

const Post = props => {
    return ( 
        <div>
            <PostHeader 
            username={props.post.username}
            thumbnailUrl={props.post.thumbnailUrl}
            />
            
            <img 
            src={props.post.imageUrl} alt="post-image" 
            />

            <LikesSection likes={props.post.likes} />
            
            <CommentSection comments={props.post.comments} />

            <CommentInput />

        </div>
    );
}

export default Post;