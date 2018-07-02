import React from 'react'
import Comment from './Comment'
import AddComment from './AddComment'
import Likes from './Likes'

const CommentSection = ({data}) => (
    <div>
        <Likes likes={data.likes} />
        {data.comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
        ))}
        <AddComment />
    </div>
)

export default CommentSection