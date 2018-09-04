import React from 'react';
import PropTypes from 'prop-types';

Post.propTypes = {
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number
}


function Post(props) {
    return (
        <div>
            <img src={props.thumbnailUrl} alt=""></img>
            <p>{props.username}</p>
            <img src={props.imageUrl} alt=""></img>
            <p>{props.likes} likes</p>
        </div>
    )
}

export default Post;