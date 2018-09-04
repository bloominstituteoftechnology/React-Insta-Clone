import React from 'react';
import PropTypes from 'prop-types';

const AddCommentBar=props=>{
    return (
    <form className='input-comment' onSubmit={(e)=>{e.preventDefault(); return props.handleInputSubmit(props.length)}}>
        <input value={props.value} onChange={props.inputHelper} className='comment-input' type='text' placeholder='Add a comment...'/><i className="dot fas fa-ellipsis-h"></i>
        
    </form>
    )
}

AddCommentBar.propTypes={
    value: PropTypes.string.isRequired,
    inputHelper: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
    handleInputSubmit: PropTypes.func.isRequired
}
 export default AddCommentBar; 