import React from 'react';
import styled from 'styled-components';

const SubmitCommentContainerStyles = styled.div`
    display:flex;
    justify-content:space-between;
    border-top:0.5px solid lightgray;
    margin-left:9px;
    margin-right:9px;
    padding-top:12px;
    padding-bottom:10px; 
`
const SubmitCommentInputStyles = styled.input`
    border: 0px solid;
    margin-left:13px;
    font-size:15px;
    font-weight:bold;
    color:lightgray;
`
const InterpunctStyles = styled.div`
    font-weight:bold;
    font-size:20px;
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