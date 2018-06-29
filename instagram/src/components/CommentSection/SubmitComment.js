import React from 'react';
import styled from 'styled-components';

const SubmitCommentContainerStyles = styled.div`
    display:flex;
    justify-content:space-between;
    border-top:0.5px solid #dbdbdb;
    margin-left:9px;
    margin-right:9px;
    padding-top:14px;
    padding-bottom:12px; 

`
const SubmitCommentInputStyles = styled.input`
    border: 0px solid;
    margin-left:13px;
    font-size:14px;
    color:#dbdbdb;
    color:black;
    outline:none;
`
const InterpunctStyles = styled.div`
    font-weight:bold;
    font-size:18px;
`

const SubmitComment = props => {
    return (
        <SubmitCommentContainerStyles>
        <div>
            <form onSubmit = {props.addNewComment} >
                <SubmitCommentInputStyles 
                    type = "text" 
                    placeholder = "Add a comment..."
                    onChange = {props.onChangeSignal}
                    value = {props.activeValue}
                />
            </form>
        </div>
        <div>
            <InterpunctStyles>
                <div>
                    &#183;&#183;&#183;
                </div>
            </InterpunctStyles>
        </div>
        </SubmitCommentContainerStyles>
    );
}

    // The 'Add a comment...' input should be wrapped in a <form></form> element. Using that 
    // form's onSubmit event handler, invoke the addNewComment function and pass it the 
    // required arguments it needs to add a new comment.
    // Update your state with the new comment (This should trigger your component tree to 
    // "re-render" with your new comment on that post).

export default SubmitComment;