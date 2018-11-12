import React from 'react';

import CommentSection from '../CommentSection/commentsection';
import PostHeader from './postheader';

import './postcontainer.css';


const Post = grams => {
    return (
        <div className="post">
            <PostHeader 
                userimg={grams.thumbnailUrl}
                username={grams.username}
            />
            <CommentSection /> 
        </div>

    );
};

export default Post;