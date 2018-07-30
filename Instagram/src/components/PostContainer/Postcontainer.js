import React, { Component } from 'react';
import Comments from '../CommentSection/CommentSection';



const Posts = props => {
    return (
        <div classname="post-container">
            <div>{props.dummyData.username}</div>
            <div>{props.dummyData.thumbnailUrl}</div>
            <div>{props.dummyData.imageUrl}</div>
            <div>{props.dummyData.likes}</div>
            <div>{props.dummyData.timestamp}</div>
            />
            <Comments />
        </div>
    );
}

export default Posts;