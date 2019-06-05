import React from 'react';
import InstaCommentButt from '../../img/comment.png';
import styled from "styled-components";


const CommentButton = () => {
    return (
        <div>
            <img className = "commentButt" alt="''" src= {InstaCommentButt} />
        </div>
    )
}

export default CommentButton;