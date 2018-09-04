import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {

    // Each PostContainer component will then pass the array of 
    // comments on each post object as a prop to an instance of the CommentSection component.
    console.log(props.imageUrl);
    return (
        <div>
            <div className = 'post-username'>
            <img src = {props.data.thumbnailUrl} alt = {props.data.timestamp}></img>
            <h2>{props.data.username}</h2>
            </div>
            <div className = 'post-img'>
            <img src = {props.data.imageUrl} alt = {props.data.timestamp}></img>
            </div>

        <CommentSection data = {props.data} comments={props.data.comments} />
        </div>
    )
}

export default PostContainer;