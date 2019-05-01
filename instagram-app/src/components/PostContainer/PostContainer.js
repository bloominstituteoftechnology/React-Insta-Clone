import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div className="full-post">
            <Post data={props.data} />
            <CommentSection comments={props.comments}/>
        </div>
    );
}

PostContainer.propTypes = {
    data: PropTypes.shape({
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired
    })
    
}
export default PostContainer;