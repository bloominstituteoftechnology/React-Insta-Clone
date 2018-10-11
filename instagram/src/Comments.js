import React from 'react';
import './PostContainer.css';


const Comments = (props) => {
    
    return(
<div className='commentSection' >
    <h4>{props.obj.username}</h4>
    <p>{props.obj.text}</p>
</div>
    )
}

export default Comments