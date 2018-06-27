import React from 'react';

const SubmitComment = props => {
    return (
        <div>
            <form onSubmit = {props.addNewComment} >
                <input 
                    type = "text" 
                    placeholder = "Add a comment..."
                    onChange = {props.onChangeSignal}
                    value = {props.activeValue}
                />
            </form>
        </div>
    );
}

    // The 'Add a comment...' input should be wrapped in a <form></form> element. Using that 
    // form's onSubmit event handler, invoke the addNewComment function and pass it the 
    // required arguments it needs to add a new comment.
    // Update your state with the new comment (This should trigger your component tree to 
    // "re-render" with your new comment on that post).

export default SubmitComment;