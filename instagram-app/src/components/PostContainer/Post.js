import React from 'react';
import heart from '../../heart.svg';
import comment from '../../comment.svg';
import PropTypes from 'prop-types';

const Post = props => {
    return (
        <div className="post">
        
            <div className="user-banner">
                <img className="user-img" src={props.data.thumbnailUrl} alt="user-img"/>
                <h3>{props.data.username}</h3>
            </div>
            <img className="user-post" src={props.data.imageUrl} alt="user-post"/>
            <div className="comment-logos">
                <img className="comment-logo" src={heart} alt="heart" />
                <img className="comment-logo" src={comment} alt="comment" />
                <p className="likes">{props.data.likes} Likes</p>
            </div>
        </div>
    );
}

Post.propTypes = {
    data: PropTypes.object,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    username: PropTypes.string
}

export default Post;