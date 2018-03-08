import React from 'react';
import { CommentSection } from '../CommentSection/CommentSection.js';
import './PostContainer.css';

export const PostContainer = (props) => {
    return (
        <div className="PostContainer">
            <div className="PostContainer__main">
            <div className="PostContainer__header"><img className="PostContainer__logo" src={props.data.thumbnailUrl} alt=""></img> {props.data.username} </div>
            <img className="PostContainer__image" src={props.data.imageUrl} alt=""></img>
            <div className="PostContainer__icons"><a className="PostContainer__icons-icon" href="javascript:console.log('+1');"><i class="far fa-heart fa-lg"></i></a> <a className="PostContainer__icons-icon" href="javascript:console.log('comment')"><i class="far fa-comment fa-lg"></i></a></div>
            <div className="PostContainer__comment-content">{props.data.likes} likes</div>
            <CommentSection comments={props.data.comments}/>
            <div className="PostContainer__timestamp PostContainer__comment-content">{props.data.timestamp}</div>
            <input className="PostContainer__input" placeholder="Add a comment..."></input>
            </div>
        </div>
    )
};