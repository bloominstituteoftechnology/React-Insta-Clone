import React from 'react';
import CommentSection from './CommentSection';
import './PostContainer.css'
import PropTypes from 'prop-types';

function PostContainer(props) {
    return (
        <div className='postContainer'>
            <header className='postHeader'>
                <img className='userThumbnail' src={props.postData.thumbnailUrl} alt=''/>
                <h2 className='username'>{props.postData.username}</h2>
            </header>
            <img className='posterImg' src={props.postData.imageUrl} alt='post'/>
            <CommentSection postComments={props.postData.comments} />
            <div className='timestamp'>{props.postData.timestamp}</div>
            <input placeholder='Add a comment...' />
        </div>
    )
}

PostContainer.propTypes = {
    postData: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.array
    })
}

export default PostContainer;