import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import styled from "styled-components";


const StyledForm = styled.div`
  margin-top: 30px;
  width: 100%;
`;

const CommentForm = props => {
  return (
    <StyledForm>
    <form onSubmit={props.addComment}>
      <FormGroup >
        <Label className="commentHeader"for="exampleText">Share your thoughts</Label>
        <Input type="text"  id="exampleText" name="commentInput" value={props.value} onChange={props.handleComment}/>
        <Button color="info" className="float-right submit-btn">
          Submit
        </Button>
      </FormGroup>
      </form>
    </StyledForm>

  );
};

export default CommentForm;
