import React from 'react';
import Comment from './Comment'


const CommentSection = (props) => {
    return (
<div className="timestamp">

    
   

   { props.commentList.map(item => {
        return <Comment comment={item} />
    }) }

    <input className="commentsBar" placeholder='Add a comment...'/>
    <p>{props.times.timestamp}</p>
</div>)
}

export default CommentSection