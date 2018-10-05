import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";
import "./CommentSection.css"

const CommentSection = props => (
    <div className="comment-section-container"> {/*Contains the entire section underneath the picture*/}
        <div className="icon-container"> {/*Contains the heart and comment bubble icons*/}
            <img className="icon-heart" src="./img/heart_icon_comments.png"></img>
            <img className="icon-bubble" src="./img/bubble_icon_comments.png"></img>
        </div> {/*End Icon Container*/}
        <div className="likes title-font">{props.likes} likes</div> {/*Contains the amount of likes the post has*/}
        <div className="comments-section"> {/*Contains the main comments section*/}
            {props.comments.map((comment) => { 
                return <Comment username={comment.username} text={comment.text}/>; {/*Creating a PostContainer component that passes each value to PostContainer as props*/}
            })} {/*end post creation map*/}
        </div> {/*End comments section*/}
        <div className="timestamp timestamp-font">{props.timestamp}</div> {/*Contains the timestamp indicating how long ago post was made*/}
        <div className="add-comment-container"> {/*Contains section where you can add a comment*/}
            <img className="add-comment-options" src="./img/options_icon_comments.png"></img> {/*The three dot options icon on the add comments bar*/}
            <textarea className="add-comment" placeholder="Add a comment..."></textarea> {/*Bar where you can type in comment*/}
        </div> {/*End add comments*/}
    </div>
);

{/*VALIDATING PASSED PROP TYPES*/}
CommentSection.propTypes = {
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf({
        username: PropTypes.string,
        text: PropTypes.string,
    })
};

export default CommentSection;
