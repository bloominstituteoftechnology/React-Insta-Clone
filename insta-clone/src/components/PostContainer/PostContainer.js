import React from 'react';
import { CommentSection } from '../CommentSection/CommentSection.js';
import './PostContainer.css';

const PostContainer = (props) => {
	function click(e) {
		e.target.classList.toggle("PostContainer-icons-liked")
		props.click(e.target.value);
	}

	function commentSubmit(e) {
		e.preventDefault();
		props.comment(e);
		e.target.firstChild.value = "";
	}

	return (
		<div className="PostContainer">
            <div className="PostContainer-main">
            <div className="PostContainer-header"><img className="PostContainer-logo" src={props.data.thumbnailUrl} alt=""></img> {props.data.username} </div>
            <img className="PostContainer-image" src={props.data.imageUrl} alt=""></img>
            <div className="PostContainer-icons"><button className="PostContainer-icons-icon" value={props.i} onClick={click}><i className="far" class="fa fa-heart fa-lg"></i></button> <button className="PostContainer-icons-icon"><i class="fa fa-comment fa-lg"></i></button></div>
            <div className="PostContainer-comment-content">{props.data.likes} likes</div>
            <CommentSection comments={props.data.comments}/>
            <div className="PostContainer-timestamp PostContainer-comment-content">{props.data.timestamp}</div>
            <form onSubmit={commentSubmit} id={props.i}>
            <input className="PostContainer-input" placeholder="Add a comment..."></input><span>...</span>
            </form>
            </div>
        </div>
	)
};

export default PostContainer;