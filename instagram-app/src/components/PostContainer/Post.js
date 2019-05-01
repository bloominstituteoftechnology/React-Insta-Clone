import React from 'react';
import Heart from '../../Heart.js';
import Comment from '../../Comment.js';
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
        
                <Heart handleLikes={props.handleLikes}/>
                <Comment />
                <p className="likes">{props.likes} Likes</p>
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