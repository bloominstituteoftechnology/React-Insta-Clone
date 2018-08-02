import React from 'react';



const CommentInput = props =>{
    return(
        <form onSubmit = {props.submitHandler}>
            <input 
                onChange = {props.changeHandler}
                value={props.comment}
                type = "text" 
                placeholder = "add comment"
            />
        </form>
    );
};

export default CommentInput;
