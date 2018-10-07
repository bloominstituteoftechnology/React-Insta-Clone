import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";
import "./CommentSection.css"

const CommentSection = props => (
    <div className="comment-section-container"> {/*Contains the entire section underneath the picture*/}
        <img className="add-comment-options" src="./img/options_icon_comments.png"></img> {/*The three dot options icon on the add comments bar*/}
        <div className="icon-container"> {/*Contains the heart and comment bubble icons*/}
            <img /*Heart Icon for adding likes*/
                data-postnumber={props.postNumber} /*Saving the index of the post as a data attribute on the heart icon so that only the likes of the individual post can be effected*/
                onClick={props.handleAddClickLike} /*On click run the function handleAddLike to add a like*/
                className="icon-heart" 
                src="./img/heart_icon_comments.png">
            </img>
            <img /*Active liked heart icon*/
                data-postnumber={props.postNumber} /*Saving the index of the post as a data attribute on the heart icon so that only the likes of the individual post can be effected*/
                onClick={props.handleRemoveClickLike} /*On click run the function handleAddLike to add a like*/
                className="icon-heart-liked display-none" 
                src="./img/heart_icon_comments_liked.png">
            </img>
            <img className="icon-bubble" src="./img/bubble_icon_comments.png"></img>
        </div> {/*End Icon Container*/}
        <div className="likes title-font">{props.likes} likes</div> {/*Contains the amount of likes the post has*/}
        <div className="comments-section"> {/*Contains the main comments section*/}
            {props.comments.map((comment, index) => { 
                return <Comment username={comment.username} text={comment.text} key={index}/>; {/*Creating a PostContainer component that passes each value to PostContainer as props*/}
            })} {/*end post creation map*/}
        </div> {/*End comments section*/}
        <div className="timestamp timestamp-font">{props.timestamp}</div> {/*Contains the timestamp indicating how long ago post was made*/}
        <div className="break"></div> {/*Line break between timestamp and add comment*/}

        <div className="add-comment-container"> {/*Contains section where you can add a comment*/}
            <form> {/*Bar where you can type in comment*/}
                <input onChange={props.handleInput} type="text" className="add-comment" placeholder="Add a comment..."></input> {/*Text Bar*/}
                <input /*Hidden submit button*/
                    onClick={props.handleAddComment} /*Hidden submit button*/
                    data-postnumber={props.postNumber}  /*Setting a data attribute to be equal to the property post number passed in that is the index number of the array of posts*/
                    className="hidden-submit"
                    type="submit"></input> 
            </form> {/*End add comment section*/}
        </div> {/*End add comments*/}

    </div>
);

{/*VALIDATING PASSED PROP TYPES*/}
CommentSection.propTypes = {
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
        })
    )
};

export default CommentSection;
