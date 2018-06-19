import React from 'react';
import './Comment.css';
import Comment from './Comment';
import CommentAdder from './CommentAdder';
import uuidv1 from 'uuid';

const CommentsContainer = (props) => {
    return (
        <div className='commentsContainer'>

            {props.comments.map((comment, id) => {
                return <Comment key={uuidv1()} comment={comment} />
            })
            }

            <CommentAdder
                changeCommentHandler={props.changeCommentHandler}
                addCommentHandler={props.addCommentHandler}
                index={props.index} />
        </div>
    );
}

export default CommentsContainer;