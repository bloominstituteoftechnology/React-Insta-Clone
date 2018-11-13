import React from 'react';

import CommentSection from '../CommentSection/commentsection';
import PostHeader from './postheader';

import './postcontainer.css';


const Post = grams => {
    return (
        <div className="post">
            {gram.username}

            <PostHeader 
                userimg={grams.gram.thumbnailUrl}
                username={grams.gram.username}
            />
            <CommentSection /> 
        </div>

    );
};

export default Post;