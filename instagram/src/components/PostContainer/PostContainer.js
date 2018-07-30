import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div>
            {props.posts.map(post => (
                <CommentSection post={post} />
            ) )}
        </div>
    );
};

export default PostContainer;