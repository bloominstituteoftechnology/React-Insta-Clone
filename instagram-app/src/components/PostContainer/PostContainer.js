import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div className="full-post">
            <Post data={props.data} />
            <CommentSection comments={props.comments} addComment={props.addComment}/>
        </div>
    );
}

PostContainer.propTypes = {
    data: PropTypes.object,
    comments: PropTypes.array,
    addComment: PropTypes.func
    
    
}
export default PostContainer;