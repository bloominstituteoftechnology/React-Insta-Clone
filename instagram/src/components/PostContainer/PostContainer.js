import React from "react";
import CommentSection from "../CommentSection";
import PropTypes from "prop-types";
import "./PostContainer.css"

{/*POST CONTAINER COMPONENT*/}
const PostContainer = props => (
    <div className="post-container"> {/*Container which contains the entire post content*/}
        <div className="header"> {/*Header section of the post which contains the profile picture and username only*/}
            <img className="profile-picture" src={props.thumbnailUrl}></img>
            <div className="username title-font">{props.username}</div>
        </div> {/*End Header*/}
        <img className="post-picture-container" src={props.imageUrl}></img> {/*Contains the picture displayed in the post*/}
        <CommentSection /*Creating a comments section in each PostContainer that takes the props of the comments values from info passed from dummydata*/
                        handleRemoveClickLike={props.handleRemoveClickLike}
                        handleAddClickLike={props.handleAddClickLike} /*Passing handle click like down to commentSection to add onto like button*/
                        handleInput={props.handleInput} /*Passing handle input down to commentSection to add onto the text bar to add comment*/
                        handleAddComment={props.handleAddComment} /*Passing down handleAddComment to CommentSection to add to submit button to handle the submission when the text is entered*/
                        postNumber={props.postNumber} 
                        likes={props.likes} 
                        timestamp={props.timestamp} 
                        comments={props.comments}/> 
    </div>
);

{/*VALIDATING PASSED PROP TYPES*/}
PostContainer.propTypes = {
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
        })
    )
};

export default PostContainer;