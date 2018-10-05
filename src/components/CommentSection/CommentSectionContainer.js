import React from 'react';
import './commentsection.css';
import CommentLoad from './CommentLoad';

const CommentSectionContainer = props => {
    return(
        <div className={"commentSectionContainer"}>

            {props.comments.map((username, comment, index) => {
                return(
                    <div key={index++}>
                        <CommentLoad comments={comment} commentusers={username} />
                    </div>
                )

            })}





        </div>
    )
}

export default CommentSectionContainer