import React from 'react';

const CommentSection = props => {
    const { users } = props;

    return (
        <div>
            <div>
                {user.comments.map(comment => {
                    return(<p><span>{comment.username + ' '}</span>{comment.text}</p>);
                })}
            </div>
        </div>
                  
      




export default CommentSection 