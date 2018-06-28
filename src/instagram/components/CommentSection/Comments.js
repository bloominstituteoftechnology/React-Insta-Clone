import React from 'react';
import CommentAdd from './CommentAdd';

const Comments = comments => {
    console.log(comments)
    {comments.comments.map(item =>

    console.log(item.comments.map(item => 
    console.log(item.username),    
    console.log(item.text)))
    )}
    return <div>
    <div>
    {comments.comments.map(item => {
        return <p key={Math.random()}>{item.likes}</p>
    })}
    </div>
    {comments.comments.map(item => {
        return (<div key={Math.random()}>
            {item.comments.map(item => {return <p key={Math.random()}><strong>{item.username}</strong> {item.text}</p>})} 
            
            <CommentAdd />
            </div>
            
        );
    })}
    
</div> 
}

 
export default Comments;