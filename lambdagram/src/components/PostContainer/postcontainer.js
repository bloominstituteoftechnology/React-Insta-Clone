import React from 'react';
import PropTypes from 'prop-types';
import './postcontainer.css';

import CommentSection from '../CommentSection/commentsection';

function PostContainer(props) {
    return (
        <div className='post'>
            <div className='post-head'>
                <img src={props.postData.thumbnailUrl} alt={`${props.postData.username} profile`} />
                <h4>{props.postData.username}</h4>
            </div>
            <div className='post-body'>
                <img src={props.postData.imageUrl} alt={`Posted by ${props.postData.username} on ${props.postData.timestamp}`} />
            </div>
            <div className='post-footer'>
                <p>{`${props.postData.likes} likes`}</p>
                <CommentSection 
                    comments={props.postData.comments} 
                    commentData={props.commentInput} 
                    commentHandler={props.handleInput} 
                />
                <p>{props.postData.timestamp}</p>
            </div>
        </div>
    );
}

PostContainer.propTypes = {
    postData: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.object)
    }),
    commentData: PropTypes.string,
    commentHandler: PropTypes.func
}

export default PostContainer;
