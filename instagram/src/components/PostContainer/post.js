import React from 'react';

import CommentSection from '../CommentSection/commentsection';
import PostHeader from './postheader';

import './postcontainer.css';


const Post = props => {
    return (
        <div className="post-individual">
            <PostHeader 
                userimg={props.post.thumbnailUrl}
                username={props.post.username}
            />
            <CommentSection /> 
        </div>

    );
};

export default Post;