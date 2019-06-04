import React from "react";
import "./comment.css";
import PropTypes  from "prop-types";

const Comment = props=>{
    return (

        <div className="comment">
            <strong> {props.comment.username} </strong>
            {props.comment.text}

        </div>
    );

}

Comment.propTypes={
    username:PropTypes.string,
    text:PropTypes.string,
}

export default Comment