import React from "react";
import {AddComments, StyledInput, StyledText} from "../../styles";
// import PropTypes from "prop-types";

const AddComment = props => {
    return (
        <AddComments>
            <StyledText timestamp>{props.post.timestamp}</StyledText>
            <form onSubmit={props.addNewComment}>
            <StyledInput 
            left
            name="newComment" 
            placeholder="Add a comment..." 
            value={props.newComment}
            onChange={props.textInputHandler} >
            </StyledInput>
            </form>
        </AddComments>
    );
}

// AddComment.propTypes = {
//     post: PropTypes.shape({
//         timestamp: PropTypes.string.isRequired
//     })
//   };

export default AddComment;