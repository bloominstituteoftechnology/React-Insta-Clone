import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from "styled-components";

/***************************************************************************************************
********************************************** Styles **********************************************
***************************************************************************************************/
const TextareaPostAddComment = styled.textarea`
  width: 90%;
  margin: 30px 0 10px 0;
  border-radius: 5px;

  &::-webkit-input-placeholder {
    font-size: 16px;
  }
  
  &:-moz-placeholder { /* Firefox 18- */
    font-size: 16px;
  }
  
  &::-moz-placeholder {  /* Firefox 19+ */
    font-size: 16px;
  }
  
  &:-ms-input-placeholder {
    font-size: 16px;
  }
  
  &:focus::-webkit-input-placeholder { color:transparent; }
  &:-moz-placeholder { color:transparent; } /* FF 4-18 */
  &::-moz-placeholder { color:transparent; } /* FF 19+ */
  &:-ms-input-placeholder { color:transparent; } /* IE 10+ */
`;

const InputPostAddCommentBtn = styled.input`
  width: 90%;
  margin: 0 0 10px 0;
  height: 40px;
  border-radius: 10px;
  &:focus{outline: none;}
`;

/***************************************************************************************************
********************************************* Component ********************************************
***************************************************************************************************/
const NewCommentForm = props => {
  const cmtUsr = 'James'

  return (
  <div>
    <form onSubmit={event => {
      props.addNewComment(event, props.postUsr, cmtUsr, moment().format('MMMM Do YYYY, h:mm:ss a'));
      }}
    >
      <TextareaPostAddComment
        rows="4" 
        name="newComment" 
        placeholder="Add a comment..." 
        form="usrform"
        value={props.newComment}
        onChange={props.handleChange}
      />
      <InputPostAddCommentBtn 
        type="submit"
      />
    </form>
  </div>
  );
}

NewCommentForm.propTypes = {
  addNewComment: PropTypes.func
}

export default NewCommentForm;