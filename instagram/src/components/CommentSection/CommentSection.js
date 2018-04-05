import React from 'react';
import './CommentSection.css';

const CommentSection = (props) => {
    const boldStart = ''
    return (
        <div className="comment-section">
            {/* <b style={{ marginRight: '1%' }}>
                {props.commentData.username}
            </b> */}
            {/* <div style={{ display: 'inline' }}> */}
            <b style={{ marginRight: '1%' }}>{props.commentData.username}</b><span>{props.commentData.text}</span>
               {/* {`${props.commentData.username} ${props.commentData.text}`} */}
            {/* </div> */}
        </div>
    )
}

export default CommentSection;