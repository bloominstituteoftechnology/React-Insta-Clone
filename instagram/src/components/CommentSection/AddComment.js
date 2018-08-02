import React from 'react';
import styled from 'styled-components';

const Container = styled.form`
    padding: 10px 0;
    border-top: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const AddComment = props =>{    
    return(
        <Container onSubmit = {props.handleAdd}>
            <input type="text" placeholder = "Add comment..." onChange = {props.handleUpdate} value = {props.value}></input>
            <i className="fas fa-ellipsis-h"></i>
        </Container>
    )         
}

export default AddComment
