import React from 'react';

 const CommentSection = (props) => {
    return (
        <div className="Comment-Wrapper">
            {props.dummyData[comments].map((comment => {
                return (
                    <div>
                        <p>{comment.username}</p>
                        <p>{comment.text} </p>
                    </div>
                )
            }))}
        </div>
    )
}

export default CommentSection;