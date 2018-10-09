import React from 'react'

const CommentSection = props => {
    return (
        <div className="comment-section">
            {props.postData.map(item => {
                return (
                    <div>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default CommentSection