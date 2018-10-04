import React from 'react';
import PropTypes from "prop-types";
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

// Body of the container

const PostContainer = (props) => {
    // Props taken in:
    // username: "philzcoffee",
    // thumbnailUrl:
    // imageUrl:
    // likes: 400,
    // timestamp: "July 17th 2017, 12:42:40 pm",
    // comments: []
          
    return (
        <div><h1>{props.username}</h1>
        <CommentSection comments={props.comments} />
        </div>
    );
};

// All fields are required...
PostContainer.propTypes = {
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array
};

// Default values
PostContainer.defaultProps = {
    likes: 0,
//    timestamp: Date.now()
  };
  
export default PostContainer;