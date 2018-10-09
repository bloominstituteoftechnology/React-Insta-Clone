import React from 'react';
import moment from 'moment';
import './CommentSection.css';
import Comment from './Comment'

const CommentSection = (props) => {
    return(
        <div className="comment-section">
        <i class="far fa-heart icon"></i>
        <i class="far fa-comment icon comment"></i>
        <p className="likes"><strong>{props.likes} likes</strong></p>
        
        {props.comArray.map(item =>{
            return(
                <Comment key={item.text} comUserName={item.username} comText={item.text} />
            )
        })}
        <p className="timestamp">{moment().startOf('hour').fromNow() }</p>
        <input className="comment-input" placeholder=" &nbsp; Add Comment..."></input>
        <p className="ellipise"> <i class="fas fa-ellipsis-h icon"></i></p>
        </div>
    )
}

export default CommentSection;