import React from 'react';
import PropTypes from 'prop-types';
import './postcontainer.css';

import Post from './post';
import CommentSection from '../CommentSection/commentsection';

function PostContainer(props) {
    return (
        <div className='post-container'>
            <Post 
                username={props.postData.username} 
                thumbnailUrl={props.postData.thumbnailUrl} 
                imageUrl={props.postData.imageUrl} 
                likes={props.postData.likes} 
                timestamp={props.postData.timestamp} 
            />
            <CommentSection 
                timestamp={props.postData.timestamp} 
                comments={props.postData.comments} 
                commentInput={props.commentInput} 
                handleCommentInput={props.handleCommentInput} 
                handleComment={props.handleComment} 
            />
        </div>
    );
}

PostContainer.propTypes = {
    postData: PropTypes.object,
    commentInput: PropTypes.string,
    handleCommentInput: PropTypes.func,
    handleComment: PropTypes.func
}

export default PostContainer;
