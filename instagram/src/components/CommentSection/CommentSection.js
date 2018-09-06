import React from 'react';

import { CommentSectionDiv, DeleteBtn } from './CommentSectionStyles';

const CommentSection = props => {
    return (
        <CommentSectionDiv>
            <h5>{ props.comment.username }</h5>
            <p>{ props.comment.text }<DeleteBtn onClick = { props.deleteComment(props.index) } className = 'delete-btn'>X</DeleteBtn></p>
        </CommentSectionDiv>
    );
}

export default CommentSection;
