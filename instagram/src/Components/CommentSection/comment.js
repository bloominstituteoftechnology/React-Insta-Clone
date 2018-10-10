import React from "react";
import Comment from "./commentDisplay";
import PropTypes from "prop-types";
import CommentBox from "./commentbox";
import "./comment.css";

//comments component maps over the comment array and passes that data to comment component
const Comments = (props) => {
    //console.log(props)
    //console.log(props.postId)
    return (
        <>
            <div className="images">
                <i className="far fa-heart fa-2x" onClick={() =>
                {
                    props.increment(props.postId)
                }}></i>
                <i className="far fa-comment fa-2x"></i>
            </div>
            <div className="username">{props.likes} likes</div>
            {props.comment.map((comment, index) => {
                return (
                <div className="comment-text" key={comment.text}>
                    <Comment 
                        comment={comment}
                        index={index}
                    />
                </div>
                )
            })}
            <div className="timestamp">
                {props.time}
            </div>
            <CommentBox 
                postId={props.postId}
                input={props.input}
                text={props.text}
                add={props.add}
            />
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