import React from 'react';
import PropTypes from 'prop-types';

let Likes = props => {
    return(
        <div>
            <div className='likes'>
                <img alt="Like" className="likeButton" src={require('./assets/heart.png')} />
                <img alt="Comment" className="commentButton" src={require('./assets/comment.png')}/>
            </div>
            <h2 className="likeCount">{props.post.likes} likes</h2>
        </div>
    )
}

Likes.propTypes = {
    post: PropTypes.shape({
        likes: PropTypes.number.isRequired,
      })
}

export default Likes;