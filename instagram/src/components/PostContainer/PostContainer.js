import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import './PostContainer.css';

const PostContainer = (props) => {
    return (
        <div>
            
            {props.data.map((post, index) => (
                
                <Post
                key={index}
                post={post}
                />
            ))}
        </div>
    );
}

PostContainer.propTypes = {
    data: PropTypes.array.isRequired
};

export default PostContainer;