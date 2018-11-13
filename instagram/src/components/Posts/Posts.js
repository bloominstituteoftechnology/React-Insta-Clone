import React from 'react';
import PostContainer from '../PostContainer/PostContainer';

import PropTypes from 'prop-types';

import './Posts.css';

const Posts = props => {
    return (
        <div className="posts">
            {props.data.map((post, index) => (
                <PostContainer 
                    key={post.timestamp}
                    post={post}
                    commentText={props.commentText}
                    handleInputChange={props.handleInputChange}
                    addNewComment={props.addNewComment}
                    index={index}
                />
            ))}
        </div>        
    );
}

Posts.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
};

export default Posts;