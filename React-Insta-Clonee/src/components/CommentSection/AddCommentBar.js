import React from 'react';
const AddCommentBar=props=>{
    return (
    <form className='input-comment' onSubmit={(e)=>{e.preventDefault(); return props.handleInputSubmit(e,props.length)}}>
        <input value={props.value} onChange={props.inputHelper} className='comment-input' type='text' placeholder='Add a comment...'/><i className="dot fas fa-ellipsis-h"></i>
        
    </form>
    )
}
 export default AddCommentBar; 