import React from 'react';
import '../ig.css';
import CommentSection from '../Comments/CommentSection.js';

const PostContainer = props => {
    console.log(props.postObject.comments);
    return (
        // postCard
        <div className="postCard">
            <div className="card-header">
            <img src={props.postObject.thumbnailUrl} alt="thumbImage" className="card-thumbnail"/>
            {props.postObject.username}
            </div>

            <div className="card-body">
            <img src={props.postObject.imageUrl} alt="bodyImage" className="card-image"/>
            <CommentSection comments = {props.postObject.comments}/>
            </div>
        </div>
    )
}

export default PostContainer;