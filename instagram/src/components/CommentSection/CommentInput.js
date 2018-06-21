import React from 'react';
import Styled from 'styled-components';

const CommentForm = Styled.input`
width: 95%;
height: auto;
margin: 14px;
border: none;
border-top: 1px solid lightgray;
font-size: 14px;
padding: 20px 0;
`;

const CommentInput = props => {
    return (
        <div><form onSubmit={props.addComment}>
                        <CommentForm type='text'
                            className='form'
                            placeholder='Add a comment...'
                            value={props.comment}
                            onChange={props.handleComment}
                            />
                        </form>
                </div>
    )
}

export default CommentInput;