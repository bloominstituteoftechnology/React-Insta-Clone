import React from 'react';
import CommentIcons from './CommentIcons';
import CommentLikes from './CommentLikes';
import Comment from './Comment';
import Timestamp from './Timestamp';
import CommentInput from './CommentInput';

function CommentContainer(props) {
    return(
        <div>
            <CommentIcons />
            <CommentLikes />
            <Comment />
            <Timestamp />
            <CommentInput />
        </div>
    )
}

export default CommentContainer;