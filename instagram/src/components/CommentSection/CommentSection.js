import React from "react";
import PropTypes from "prop-types";
import Comment from './Comment'
import './CommentSection.css'

const CommentSection = props => {
    // console.log("CommentSection: ", props.comments)
    return (
        <div className='comment-section'> 
            <img src={props.data.imageUrl} alt='post image' />
            <p className='likes'>{props.data.likes} likes</p>
            {props.comments.map(comment => (
                <Comment username={comment.username}
                         text={comment.text}
                         key={comment.text}
                />
            ))}
            <input type="text" value="Add a comment..." className='input'/>
        </div>
    )
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
}

export default CommentSection;
