import React from 'react';
import PropTypes from "prop-types";
import './PostHeader.css';

const PostHeader = props => {
    return (
        <div>
            <div className="postHeader">
                <img src={props.post.thumbnailUrl} alt="profile"/>
                <h4>{props.post.username}</h4>
            </div>
            <img className="postimg" src={props.post.imageUrl} alt="post"/>
        </div>
    );
}

PostHeader.propTypes = {
    item: PropTypes.shape({
        username: PropTypes.string.isRequired,
    })
}

export default PostHeader;