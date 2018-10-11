import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import './comment.css';

const Form = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
        font-family: "proxima-nova",sans-serif;
        font-style: normal;
        font-weight: 400;
        padding: 10px 0px;
        width: 90%;
        border: 0px;
    }

    input:focus {
        outline: none;
    }
`;

const AddComment = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>
            <input placeholder=" Add a comment..." value={props.value} onChange={props.onChange} />
            <FontAwesomeIcon icon='ellipsis-h'/>
        </Form>
    )
}

export default AddComment;