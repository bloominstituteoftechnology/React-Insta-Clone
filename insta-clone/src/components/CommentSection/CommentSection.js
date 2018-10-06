import React from 'react';
import moment from 'moment';
import Comment from './Comment'

const CommentSection = (props) => {
    return(
        <>
        <i class="far fa-heart icon"></i>
        <i class="far fa-comment icon comment"></i>
        <p className="likes"><strong>{props.likes}</strong></p>
        
        {props.comArray.map(item =>{
            return(
                <Comment key={item.text} comUserName={item.username} comText={item.text} />
            )
        })}
        <p>{moment().startOf('hour').fromNow() }</p>
        <input className="comment-input" placeholder="Add Comment..."></input>
        <i class="fas fa-ellipsis-h icon"></i>
        </>
    )
}

export default CommentSection;