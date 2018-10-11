import React from "react";
import {AddComments} from "../../styles";
// import PropTypes from "prop-types";

const AddComment = props => {
    return (
        <AddComments>
            <p>{props.post.timestamp}</p>
            <form onSubmit={props.addNewComment}>
            <input 
            name="newComment" 
            placeholder="Add a comment..." 
            value={props.newComment}
            onChange={props.textInputHandler} >
            </input>
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