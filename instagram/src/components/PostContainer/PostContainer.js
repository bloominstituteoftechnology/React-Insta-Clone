import React from 'react';
import CommentSection from './CommentSection';





const PostContainer = props => {
    return (
        <div className = "post-wrapper">
            <div className = "post-header">
                <img src = {props.dummyData.thumbnailUrl} alt = '#' />
                <h3>{props.dummyData.username}</h3>
            </div>
                <img src={props.dummyData.imageUrl} alt = '#' />
                <CommentSection comments = {props.dummyData.comments} />
                <div>{props.dummyData.timestamp}</div>
                <input placeholder ='Add a comment...' />
            </div>
    )
}

export default PostContainer;

