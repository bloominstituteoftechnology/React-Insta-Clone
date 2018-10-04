import React from 'react';
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
        <div>{props.username}</div>
    );
};

export default PostContainer;