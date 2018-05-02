import React from 'react'
import './CommentSection.css'

const CommentSection = props => {
    return (
        <div className="wellDiv">
            <h6>{props.likes} likes</h6>
            {props.comments.map((element) => {
                return <div><h6>{element.username}</h6>  {element.text}</div>
            })}
            <p className="time">{props.time}</p>
            <div className="line"></div>
            <input placeHolder="Add a comment..." />
            <i class="fas fa-ellipsis-h"></i>
        </div>
    );
}


export default CommentSection;