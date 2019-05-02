import React from 'react';  
import styled from 'styled-components'; 

const AddComment = styled.input `
    width: 89%; 
    font-family: 'Pacifico', cursive;
    font-size: 1.5rem; 
    border: 1px solid grey; 

`; 

const AddNewComment = props => {
    return (        
        <form onSubmit={props.onSubmit}>
            <AddComment
                    type="text"
                    name="newComment"
                    placeholder="Add a new comment..." 
                    value={props.commentField}
                    onChange={props.onChange}
                    onSubmit={props.onSubmit}
            />
        </form>
    );
};
  
export default AddNewComment; 