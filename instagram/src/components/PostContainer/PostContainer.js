import React from "react";
import PropTypes from "prop-types";

import "./PostContainer.css";

import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
    return (
        <div className="post">
            <header>
                <img className="thumb" src={props.item.thumbnailUrl} alt="user icon" />
                <h2>{props.item.username}</h2>
            </header>
            <img className="postPic" src={props.item.imageUrl} alt="picture" />
            <div className="icons">
            </div>
            <p>{props.item.likes} likes</p>
            <CommentSection 
                arr={props.item.comments} 
                id={props.id}
            />
        </div>
    );
};

PostContainer.propTypes = {
    item: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.array
    }).isRequired
}

export default PostContainer;