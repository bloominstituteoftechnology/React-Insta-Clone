import React from 'react';
import './Comment.css';
import Comment from './Comment';
import CommentAdder from './CommentAdder';

const CommentsContainer = (props) => {
    return (
        <div className='commentsContainer'>

            {props.comments.map((comment, id) => {
                return <Comment key={id} comment={comment} />
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