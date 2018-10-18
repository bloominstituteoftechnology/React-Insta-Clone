import React from 'react';
import ReactDOM from 'react-dom';

const AddComment = (props) => {
    return(
        <div>
           {/* {props.username}
           {props.text} */}
           <input onSubmit={props.AddedComment} onChange={props.CommentHandler} />
        </div>
    )
}

export default AddComment