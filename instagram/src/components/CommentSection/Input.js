import React from "react";

const Input = props => {
    return(
        <form onSubmit={props.handleSubmit}>
            <input 
                type='text' 
                placeholder='What are your thoughts...'
                value={props.comment}
                onChange={props.handleComment}
                />
        </form>
    );
}

export default Input;