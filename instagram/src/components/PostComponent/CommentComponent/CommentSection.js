import React from 'react'
import UserComment from './UserComment';
import Comment from './Comment'

function CommentSection (props){
    return (
        <div className="commentSection">
            <postData />
            <UserComment />
            <Comment />
        </div>
    )
}

export default CommentSection