import React from "react";
import Comment from "./commentDisplay";
import PropTypes from "prop-types";
import CommentBox from "./commentbox";
import "./comment.css";

//comments component maps over the comment array and passes that data to comment component
const Comments = (props) => {
    return (
        <>
            <div className="images">
                <img src="https://cdn4.iconfinder.com/data/icons/pyconic-icons-1-2/512/heart-outline-512.png" className="comment-img" alt="heart" />
                <img src="https://cdn4.iconfinder.com/data/icons/large-black-icons/512/Message_chat_text_bubble_phone.png" className="comment-img" alt="message" />
            </div>
            <div className="username">{props.likes} likes</div>
            {props.comment.map(comment => {
                return (
                <div className="comment-text" key={comment.text}>
                    <Comment comment={comment}/>
                </div>
                )
            })}
            <CommentBox />
        </>
    )
}

Comments.propTypes = {
    likes: PropTypes.number,
    comment: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string,
        })
    ).isRequired
}

export default Comments;