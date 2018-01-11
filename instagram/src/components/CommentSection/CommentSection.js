import React from 'react';

const CommentSection = (props) => {
    return (
        <div>
            {props.data.map((post, index) => {
                return <div key={index}> 
                    {post.comments.map((post, index) => {
                        return <div key={index}>
                        {post.username}
                        <br/>
                        {post.text}
                        </div>
                    })}
                </div>
            })}
        </div>
    );
}

export default CommentSection;