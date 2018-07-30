import React from 'react';
import PropTypes from 'prop-types'; 
import CommentList from '../CommentSection/CommentList.js';

const Post = (props) => {

    return (
        <div className="comment-list-container">

            <CommentList />
        </div>
    )
}

export default Post;