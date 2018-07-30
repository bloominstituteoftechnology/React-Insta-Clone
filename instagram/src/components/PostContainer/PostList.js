import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post.js';

const PostList = (props) => {

    return (
        <div className="comment-list-container">
            <Post />
        </div>
    )
}

export default PostList;