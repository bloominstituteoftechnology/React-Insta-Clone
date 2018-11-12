import React from 'react';

import CommentSection from '../CommentSection/commentsection';

import './postcontainer.css';


const PostContainer = () => {
    return (
        <div className="postContainer">
            This is the post Container     
            <CommentSection /> 
        </div>

    );
};

export default PostContainer;