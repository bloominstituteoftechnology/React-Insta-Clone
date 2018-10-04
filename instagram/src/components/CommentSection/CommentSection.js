import React from "react";

const CommentSection = props => (
    <div className="comment-section-container"> //Contains the entire section underneath the picture
        <div className="icon-container"> //Contains the heart and comment bubble icons
            <div className="icon-heart"></div>
            <div className="icon-bubble"></div>
        </div> //End Icon Container
        <div className="likes"></div> //Contains the amount of likes the post has
        <div className="comments-section"> //Contains the main comments section
            <div className="comment-example"></div> //Example comment for show only
            <div className="comment-example"></div> //Example comment for show only
            <div className="comment-example"></div> //Example comment for show only
        </div> //End comments section
        <div className="timestamp"></div> //Contains the timestamp indicating how long ago post was made
        <div className="add-comment-container"> //Contains section where you can add a comment
            <div className="add-comment"></div> //Bar where you can type in comment
            <div className="add-comment-options"></div> //The three dot options icon on the add comments bar
        </div> //End add comments
    </div> //End comments section container
);

export default CommentSection;
