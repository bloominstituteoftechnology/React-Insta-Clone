import React from 'react';



const Comments = props => {
    return (
    <div className='main-content'>
       
        <div className='comment'>
            <p> <span>{props.comment.username} </span> {props.comment.text} </p>
        </div>
        </div>
    );
}

export default Comments;