import React from 'react';
import {FormInputContainer, InputAddComent} from '../PostContainer/PostsStyled';

const InputComment = props => {
 

  return (
    <div>
      <FormInputContainer onSubmit={(event) => props.handleAddComment(event)}>
        <InputAddComent
          type="text"
          placeholder={'Add comment...'}
          value={props.inputText}
          onChange={props.handleChange}
          name = {props.username}
        ></InputAddComent>

      </FormInputContainer>
    </div>
  );
};

export default InputComment;