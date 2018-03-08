import React from 'react';
import { CommentSection } from '../CommentSection/CommentSection.js';
import './PostContainer.css';

export const PostContainer = (props) => {
    return (
        <div className="PostContainer__main">
            <div><img className="PostContainer__logo" src={props.data.thumbnailUrl} alt=""></img> {props.data.username} </div>
            <img className="PostContainer__image" src={props.data.imageUrl} alt=""></img>
            <div><i class="far fa-heart fa-2x"></i> <i class="far fa-comment fa-2x"></i></div>
            <div>{props.data.likes} likes</div>
            <CommentSection comments={props.data.comments}/>
            <input></input>
            <div>{props.data.timestamp}</div>
        </div>
    )
};