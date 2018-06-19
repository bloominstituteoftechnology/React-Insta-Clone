import React from 'react';
import PropTypes from "prop-types";
import "./CommentSection.css";

const CommentSection = props => {
return (
    <div>
        {props.dummyData.map(comment => (
            <div className="user-comments" key={Math.random()}>
                <p className="comments-username">{comment.username} </p>
                <p className="comments-text">{comment.text} </p>
           
            </div>
        ))}
        <div className="comment-box">
            <input className="add-comment-box"  type="text" placeholder="Add a comment..."/>
        </div>
        </div>
)
};
 
CommentSection.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
};

export default CommentSection;