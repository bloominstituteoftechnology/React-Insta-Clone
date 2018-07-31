import React from "react";
import NewComment from './Comment';
import "./CommentSection.css";
import PropTypes from 'prop-types';

const CommentSection = props => {
    return (
        <div className = "commentSection">
           {props.comments.map((comment, index) => {
              return <NewComment key = {index} commentUser = {comment.username} commentText = {comment.text}/>
            })}
            {console.log(props.comments)}
            <p className = "timestamp">{props.timeStamp}</p>
            <div className = "addComment">
                <p>Add a comment...</p>
            </div>
        </div>
    )

}

CommentSection.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string, 
        text: PropTypes.string
    })
}

export default CommentSection; 
