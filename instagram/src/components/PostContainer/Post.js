import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';

const Post = props => {
    return (
        <div>
            <PostHeader
                username= {props.post.username}
                thumbnailUrl= {props.post.thumbnailUrl}
             />
            <div>
                <img 
                    src= {props.post.imageUrl} 
                    alt= "post-main"
                 />
            </div>
            <CommentSection comments= {props.post.comments} />
        </div>
    );
};

export default Post;