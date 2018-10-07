import React from 'react';
import PropTypes from "prop-types";
import './PostHeader.css';

const PostHeader = props => {
    return (
        <div>
            <div className="postHeader">
                <img src="#" alt="profile"/>
                <h4>{props.item.username}</h4>
            </div>
            <div className="postimg"></div>
        </div>
    );
}

PostHeader.propTypes = {
    item: PropTypes.shape({
        username: PropTypes.string.isRequired,
    })
}

export default PostHeader;