import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputComment=styled.input`
    border: none !important;
    transition: none !important;
    outline: none !important;
    width: 90% !important;
    `
const AddCommentBar=props=>{
    return (
    <form onSubmit={(e)=>{e.preventDefault(); return props.handleInputSubmit(props.length)}}>
        <InputComment value={props.value} onChange={props.inputHelper} className='comment-input' type='text' placeholder='Add a comment...'/><i className="dot fas fa-ellipsis-h"></i>
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