import React from 'react';
import PropTypes from 'prop-types';
import './postcontainer.css';

import heart from '../../assets/heart.png';
import commentbubble from '../../assets/comment.png';

function Post(props) {
    return (
        <div className='post'>
            <div className='post-head'>
                <img className='user-img' src={props.thumbnailUrl} alt={`${props.username}'s profile`} />
                <h4>{props.username}</h4>
            </div>
            <div className='post-body'>
                <img className='post-img' src={props.imageUrl} alt={`Posted by ${props.username} on ${props.timestamp}`} />
            </div>
            <div className='post-footer'>
                <div>
                    <img src={heart} alt='Heart' />
                    <img src={commentbubble} alt='Comment' />
                </div>
                <p>{`${props.likes} likes`}</p>
            </div>
        </div>
    );
}

Post.propTypes = {
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired
}

export default Post;
