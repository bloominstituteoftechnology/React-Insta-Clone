import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import styled from "styled-components";


const StyledForm = styled.div`
  margin-top: 20px;
  margin-bottom: -50px;
  width: 100%;
`;

const Styledh4 = styled.h4`
  font-size: 10px;
  color: #969696;
`;

const CommentForm = props => {
  if (props.commentClicked === true) {
  return (
    
        <StyledForm>
        <form onSubmit={props.addComment}>
        <FormGroup >
        <Label className="commentHeader"for="exampleText">Share your thoughts</Label>
        <Input type="text"  id="exampleText" name="commentInput" value={props.value} onChange={props.handleEvent}/>
        <Button color="info" className="float-right submit-btn">
          Submit
        </Button>
      </FormGroup>
      </form>
    </StyledForm>
      );
    } else {
      return (
        <Styledh4>Click the comment bubble to share your opinion </Styledh4>
      )};
    
  
    }


export default CommentForm;
