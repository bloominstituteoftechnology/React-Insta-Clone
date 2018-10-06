import React from 'react';
import './PostContainer.css';


const Comments = (props) => {
    
    return(
<div className='commentSection' onClick={props.completedHandler} onDoubleClick={props.importantHandler}data-id={props.obj.id}>
    <h4>{props.obj.username}</h4>
    <p>{props.obj.text}</p>
</div>
    )
}

export default Comments