import React from 'react';
import './commentsection.css';
import CommentLoad from './CommentLoad';

const CommentSectionContainer = props => {
    return(
        <div className={"commentSectionContainer"}>

            {props.comments.map((username, comment) => {
                return(
                    <div>
                        <commentLoad comments={comment} commentusers={username} />
                    </div>
                )

            })}





        </div>
    )
}

export default CommentSectionContainer