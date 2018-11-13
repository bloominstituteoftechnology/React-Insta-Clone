import React from 'react';



const Comments = props => {
    console.log(props);
    return (
        <div className='comment'>
           <p> <span>{props.comment.username} </span> {props.comment.text} </p>
        </div>
    );
}

export default Comments;