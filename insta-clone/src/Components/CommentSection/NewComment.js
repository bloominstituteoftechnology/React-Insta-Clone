import React from 'react';

const NewComment = (props) => {
    return (
        <div>
            <input 
                placeholder={props.placeholder}
                name={props.name}
                type={props.type}
                onChange={props.handleInput}
                value={props.value}
            />
        </div>
    )
}
            
export default NewComment;


// <button onClick={this.AddComment}>Add Comment</button>