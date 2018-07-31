import React from 'react';

const AddComment = props =>{    
    return(
        <form className="add-comment" onSubmit = {props.handleAdd}>
            <input type="text" placeholder = "Add comment..." onChange = {props.handleUpdate} value = {props.value}></input>
            <i className="fas fa-ellipsis-h"></i>
        </form>
    )         
}

export default AddComment
