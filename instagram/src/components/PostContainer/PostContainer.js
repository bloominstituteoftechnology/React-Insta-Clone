import React from 'react';
import CommentSection from './CommentSection';


const PostContainer = props => {
    return (
        <div className = "post-wrapper">
            <div className = "post-header">
                <img src = {props.data.thumbnailUrl} alt = '#' />
                <h3>{props.data.username}</h3>
            </div>
                <img src={props.data.imageUrl} alt = '#' />
                <CommentSection comments = {props.data.comments} />
                <div>{props.data.timestamp}</div>
                <input placeholder ='Add a comment...' />
            </div>
    )
}

export default PostContainer;

