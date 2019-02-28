import React from 'react';


const Comment = (props) => {
    return (
<div  className='comments' >
<strong>{`${props.comment.username}`}</strong>{` : ${props.comment.text}`}
    
  
</div>)
}

export default Comment