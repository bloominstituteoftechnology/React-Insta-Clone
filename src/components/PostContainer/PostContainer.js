import React from 'react';
import PropTypes from "prop-types";
import PostHeader from './PostHeader';
import LikesContainer from './LikesContainer';
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
        <div className='postContainer'>
            <PostHeader username={props.username} thumbnailUrl={props.thumbnailUrl} />
            <img className='postContainerImg' src={props.imageUrl} alt='' />
            <LikesContainer likes={props.likes} />
            <CommentSection comments={props.comments} timestamp={props.timestamp} />
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