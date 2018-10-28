import React from 'react';
import {CommentContent, CommentUsername, CommentText} from '../Styles/Styles';


const Comment = props => {
    return(
    <CommentContent>

        <CommentUsername>
        {props.comment.username}
        </CommentUsername>
        
        <CommentText>
        {props.comment.text}
        </CommentText>
 
        </CommentContent>
    );
}

export default Comment;