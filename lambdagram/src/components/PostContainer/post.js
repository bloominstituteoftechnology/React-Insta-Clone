import React from 'react';
import PropTypes from 'prop-types';
import './postcontainer.css';

import heart from '../../assets/heart.png';
import commentbubble from '../../assets/comment.png';

function Post(props) {
    return (
        <div className='post'>
            <div className='post-head'>
                <img className='user-img' src={props.postData.thumbnailUrl} alt={`${props.postData.username}'s profile`} />
                <h4>{props.postData.username}</h4>
            </div>
            <div className='post-body'>
                <img className='post-img' src={props.postData.imageUrl} alt={`Posted by ${props.postData.username} on ${props.postData.timestamp}`} />
            </div>
            <div className='post-footer'>
                <div>
                    <img src={heart} alt='Heart' onClick={ (e) => props.handleLikes(e, props.index) } />
                    <img src={commentbubble} alt='Comment' />
                </div>
                <p>{`${props.postData.likes} likes`}</p>
            </div>
        </div>
    );
}

Post.propTypes = {
    postData: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired
    }).isRequired,
    handleLikes: PropTypes.func.isRequired,
    index: PropTypes.number
}

export default Post;
