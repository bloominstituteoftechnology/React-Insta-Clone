import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AddComment = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #EFEFEF;
    margin: 0 auto;

    input {
        width: 56rem;
        padding: 14px 14px 14px 0;
        border: none;
        color: #9E9E9E;

        &:focus {
            outline: 0;
        }
    }
`


const CommentForm = props => {
    return(
        <AddComment>
            <form onSubmit={props.addNewComment}>
                <input 
                    type="text" 
                    name="newComment"
                    placeholder="Add a comment..."
                    value={props.newComment}
                    onChange={props.handleChange}
                />
            </form>
            <i className="fas fa-ellipsis-h"></i>
        </AddComment>
    );
}

CommentForm.propTypes ={
    newComment: PropTypes.string,
    handleChanges: PropTypes.func,
}

export default CommentForm;