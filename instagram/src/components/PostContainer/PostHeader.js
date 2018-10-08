import React from 'react';
import PropTypes from "prop-types";
import './PostHeader.css';

const PostHeader = props => {
    return (
        <div>
            <div className="postHeader">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="profile"/>
                <h4>{props.item.username}</h4>
            </div>
            <img className="postimg" src={props.item.imageUrl} alt="image"/>
        </div>
    );
}

PostHeader.propTypes = {
    item: PropTypes.shape({
        username: PropTypes.string.isRequired,
    })
}

export default PostHeader;