import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import styled from "styled-components";

const StyledForm = styled.div`
  margin-top: 20px;
`;

const CommentForm = () => {
  return (
    <StyledForm>
      <FormGroup>
        <Label for="exampleText">Share your thoughts</Label>
        <Input type="textarea" name="text" id="exampleText" />
        <Button color="info" className="float-right submit-btn">
          Submit
        </Button>
      </FormGroup>
    </StyledForm>
  );
};

export default CommentForm;
