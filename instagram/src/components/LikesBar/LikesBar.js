import React from 'react';
import './LikesBar.css';

const LikesBar = props =>{
    return(
        <div>
            <div className='likes-bar-images'>
                <img className='likes-bar-heart' src={require('../../static/img/heart.png')}></img>
                <img className='likes-bar-comment' src={require('../../static/img/comment.png')}></img>
            </div>
            <div><p className='likes-bar-likes'>{props.data.likes} likes</p></div>
        </div>
    )
}

export default LikesBar;