import React from 'react';
import ReactDOM from 'react-dom';

const AddComment = (props) => {
    return(
        <div>
           {/* {props.username}
           {props.text} */}
           <form    onSubmit={props.AddedComment}  >
                   <input
                
                   type="text"
                   value={props.text}
                    onChange={props.CommentHandler}
                   />
      </form>
        </div>
    )
}

export default AddComment