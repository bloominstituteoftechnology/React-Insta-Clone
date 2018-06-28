import React from 'react';
// import instagramCommentHeart from "../../../public/img/iconsAndLogos/instagram-comment-heart.png"
import instagramCommentHeart from "../../img/iconsAndLogos/instagram-comment-heart.png"
import instagramCommentBubble from "../../img/iconsAndLogos/instagram-comment-bubble.png"



const CommentsHeader = props => {
    return (
        <div>
            Heart Icon 
            <img onClick = {props.likeAPost} src = {instagramCommentHeart} alt = "" />
            Comment Icon 
            <img src = {instagramCommentBubble} alt = "" />
            {props.numberOfLikes} likes
        </div>
    );
}

// (Consider adding .focus() functionality when you click on comment bubble icon )

    // The 'Add a comment...' input should be wrapped in a <form></form> element. Using that 
    // form's onSubmit event handler, invoke the addNewComment function and pass it the 
    // required arguments it needs to add a new comment.
    // Update your state with the new comment (This should trigger your component tree to 
    // "re-render" with your new comment on that post).

export default CommentsHeader;