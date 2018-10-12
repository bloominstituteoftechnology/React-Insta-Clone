import React from "react";
import { StyledDiv, StyledImg, StyledInput } from "../Styles/StyleSheet";

const CommentInput = props => {
  return (
    <form onSubmit={props.submitComment}>
      <StyledDiv centerFlex>
        <StyledInput
          commentAddInput
          className="Comment-add-input"
          type="text"
          value={props.comment}
          placeholder="Add comment... "
          onChange={props.changeComment}
        />
      </StyledDiv>
    </form>
  );
};

export default CommentInput;
