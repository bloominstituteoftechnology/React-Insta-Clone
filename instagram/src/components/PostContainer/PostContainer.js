import React from 'react';
import { CommentSection } from '../CommentSection/CommentSection.js';
import './PostContainer.css';

export const PostContainer = (props) => {
    return (
        <div>
            <div><img src={props.data.thumbnailUrl} alt=""></img> {props.data.username} </div>
            <img src={props.data.imageUrl} alt=""></img>
            <div>"like" "comment"</div>
            <div>{props.data.likes} likes</div>
            <CommentSection comments={props.data.comments}/>
            <input></input>
            <div>{props.data.timestamp}</div>
        </div>
    )
};