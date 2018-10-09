import React from 'react';
import PropTypes from 'prop-types';

let Likes = props => {
    return(
        <div>
            <div className='likes'>
                <img alt="Like" className="likeButton" src={props.classList[1] === ('liked') ? require('./liked.png') : require('./heart.png')} onClick={props.likeHandler}/>
                <img alt="Comment" className="commentButton" src={require('./comment.png')}/>
            </div>
            <h2 className="likeCount">{props.likes} likes</h2>
        </div>
    )
}

Likes.propTypes = {
    likes: PropTypes.number.isRequired,
}

export default Likes;