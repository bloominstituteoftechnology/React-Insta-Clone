import React from 'react';
import './LikesBar.css';
import PropTypes from 'prop-types';

const LikesBar = props =>{
    return(
        <div>
            <div className='likes-bar-images'>
                <img onClick={props.handleLikeClick} className='likes-bar-heart' src={require('../../static/img/heart.png')}></img>
                <img className='likes-bar-comment' src={require('../../static/img/comment.png')}></img>
            </div>
            <div><p className='likes-bar-likes'>{props.likes} likes</p></div>
        </div>
    )
}

LikesBar.propTypes = {
    likes: PropTypes.number
}

export default LikesBar;