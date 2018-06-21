import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import './CommentForm.css';

// styled-components
const CommentFormContainer = styled.div`
    max-width: 100%;
    margin: 30px auto 20px;
    border-radius: 5px;

    form {
        display: flex;
        justify-content: space-between;
        margin: 0 20px;

        input {
            font-size: 18px;
            border: 0;
        }

        button {
            background: white;
            border: 0;
            font-size: 18px;

            &:hover {
                cursor: pointer;
            }
        }
    }
`;

// Return CommentForm
// Props: comment={this.state.comment} handleChange={this.handleCommentChange} handleSubmit={this.handleCommentSubmit}
const CommentForm = props => {
    return (
        <CommentFormContainer>
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    value={props.comment}
                    placeholder="Add comment... "
                    onChange={props.handleChange}
                />
                <button type="submit"><span>...</span></button>
            </form>
        </CommentFormContainer>
    );
};

// prop-type check
CommentForm.propTypes = {
    comment: PropTypes.string
};

export default CommentForm;