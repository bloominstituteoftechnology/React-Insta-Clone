import React from 'react';
import moment from 'moment';
import './CommentSection.css';
import heart from '../../assets/insta-heart.png';
import reply from '../../assets/insta-reply.PNG';  // For some reason, caps required for png

const CommentSection = props => (
    <div className="comments">
        <div className="comment-icons">
            <img src={heart} alt="fave button" />
            <img src={reply} alt="reply button" />
        </div>
        <h5>{props.likes} like{props.likes !== 1 ? 's':null}</h5>
        <div className="comment-list">
            {props.comments.map(comment => <p className="comment-instance"><span>{comment.username}</span> {comment.text}</p>)}
        </div>
        <p>{moment(props.time, 'MMMM Do YYYY, hh:mm:ss a').fromNow()}</p>
    </div>
);

export default CommentSection;