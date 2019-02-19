import React from 'react';
import Comment from './Comment'


const CommentSection = (props) => {
    return (
<div >

    
   

   { props.commentList.map(item => {
        return <Comment comment={item} />
    }) }

    <input className="commentsBar" placeholder='Add a comment...'/>
    {props.times.timestamp}
</div>)
}

export default CommentSection