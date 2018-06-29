import React from 'react';
import instagramCommentHeart from "../../img/iconsAndLogos/instagram-comment-heart.png";
import instagramCommentBubble from "../../img/iconsAndLogos/instagram-comment-bubble.png";
import styled from 'styled-components';
import {UsernameStyles} from '../PostContainer/PostHeader';

const CommentsHeaderContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    padding-left:7px;
    width:613px;
    margin-bottom:8px;
`

const CommentsHeaderIcons = styled.img`
    width:27px;
    margin-right:10px;
    margin-top:8px;
`

const CommentsHeader = props => {
    return (
        <CommentsHeaderContainer>
            <div> 
                <CommentsHeaderIcons onClick = {props.likeAPost} src = {instagramCommentHeart} alt = "" />
                <CommentsHeaderIcons src = {instagramCommentBubble} alt = "" />
                <UsernameStyles>
                    {props.numberOfLikes} likes
                </UsernameStyles>
            </div>
        </CommentsHeaderContainer>
    );
}

// (Consider adding .focus() functionality when you click on comment bubble icon )

    // The 'Add a comment...' input should be wrapped in a <form></form> element. Using that 
    // form's onSubmit event handler, invoke the addNewComment function and pass it the 
    // required arguments it needs to add a new comment.
    // Update your state with the new comment (This should trigger your component tree to 
    // "re-render" with your new comment on that post).

export default CommentsHeader;