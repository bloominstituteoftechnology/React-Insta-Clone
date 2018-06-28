import React from "react";
import styled from 'styled-components';

// const CommentInput = (props) => {
//     return (
//         <div className="addComment">
//             <form onSubmit={props.addNewComment}>
//                 <input 
//                     type="text" 
//                     placeholder="add comment... " 
//                     value={props.comment}
//                     onChange={props.changeComment}
//                 />
//             </form>
//         </div>
//     );
// };

const AddComment = styled.form`
    width: 71%;
    border: none;
    margin-top: 10px;
`;

const CommentInputBox = styled.input``;

const CommentInput = props => {
    return (
        <AddComment onSubmit={props.addNewComment}>
            <CommentInputBox
                type="text" 
                placeholder="add comment... " 
                value={props.comment}
                onChange={props.changeComment}
            />
        </AddComment>
    )
}

export default CommentInput