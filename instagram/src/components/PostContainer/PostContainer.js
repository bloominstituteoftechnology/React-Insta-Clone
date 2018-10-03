import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from "prop-types";

const PostContainer = (props) => {
    return (
        <div>
            <p>{props.username}</p>
            <p>{props.timestamp}</p>
            <p>{props.likes}</p>
            <img src={props.image} alt="instagram" />
            <img src={props.thumbnail} alt="profile" />
            <CommentSection comments={props.comments}/>
        </div>
    )
}

PostContainer.propTypes = {
    username: PropTypes.string.isRequired,
    likes: PropTypes.number,
    image: PropTypes.image,
    thumbnail: PropTypes.image,
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
};

export default PostContainer;