import React from 'react'
import Comments from './Comments'

const CommentSection = props => {
    return (
        <div className="comment-section">
            {props.postData.map(item => {
                return (
                    <Comments 
                        comments={item.comments}
                    />
                )
            })}
        </div>
    )
}

export default CommentSection