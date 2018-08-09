import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import styled from "styled-components";


const StyledForm = styled.div`
  margin-top: 20px;
  margin-bottom: -50px;
  width: 100%;
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
        <p>Click comment icon to display comments </p>
      )};
    
  
    }


export default CommentForm;
