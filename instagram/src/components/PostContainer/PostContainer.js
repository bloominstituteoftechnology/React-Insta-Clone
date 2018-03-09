import React from 'react';
import { CommentSection } from '../CommentSection/CommentSection.js';
import './PostContainer.css';

export const PostContainer = (props) => {
    
    function click(event) {
        event.target.classList.toggle("PostContainer__icons-liked")
        props.click(event.target.value);
    }

    function commentSubmit(event) {
        event.preventDefault();
        props.comment(event);
        event.target.firstChild.value = "";
    }

    return (
        <div className="PostContainer">
            <div className="PostContainer__main">
            <div className="PostContainer__header"><img className="PostContainer__logo" src={props.data.thumbnailUrl} alt=""></img> {props.data.username} </div>
            <img className="PostContainer__image" src={props.data.imageUrl} alt=""></img>
            <div className="PostContainer__icons"><button className="PostContainer__icons-icon" value={props.i} onClick={click}><i className="far" class="far fa-heart fa-lg"></i></button> <button className="PostContainer__icons-icon"><i class="far fa-comment fa-lg"></i></button></div>
            <div className="PostContainer__comment-content">{props.data.likes} likes</div>
            <CommentSection comments={props.data.comments}/>
            <div className="PostContainer__timestamp PostContainer__comment-content">{props.data.timestamp}</div>
            <form onSubmit={commentSubmit} id={props.i}>
            <input className="PostContainer__input" placeholder="Add a comment..."></input><span>...</span>
            </form>
            </div>
        </div>
    )
};