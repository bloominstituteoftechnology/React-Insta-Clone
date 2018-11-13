import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';

const PostContainer = (props) => {
    return (
        <div>
            
            {props.data.map((post, index) => (
                <CommentSection 
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