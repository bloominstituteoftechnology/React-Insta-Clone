import React from 'react';
import More from '../../img/more-horizontal.png';
import styled from 'styled-components';


const AddCommentDiv = styled.div`
    display: flex;
    align-items: center;
`;

const Form = styled.form`
    width: 100%;
`;

const Input = styled.input`
    width: 100%;
    border: none;
    color: darkgrey;
    font-size: 1.6rem;
    outline: none;
    position: relative;
`;

const AddComment = props => {
    return (
        <AddCommentDiv>
            <Form className="add-comment-form" onSubmit={props.addNewComment}>
                <Input
                    type="text"
                    placeholder="Add a comment..."
                    className="add-comment-input"
                    onChange={props.changeHandler}
                    name={props.id}
                    value={props.newComment}
                    />
            </Form>
            <img src={More} alt="more options" />
        </AddCommentDiv>
    );
}

export default AddComment;