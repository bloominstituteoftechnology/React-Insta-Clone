import React, { Component } from 'react';
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    border-top: 1px solid #efefef;
`;

const Input = styled.input`
    width: 100%;
    height: 57px;
    border: 0;
    padding-left: 2%;
    background: #ffffff;
`;

class CommentInput extends Component {
    constructor(props) {
      super(props);
      this.state = {
          inputValue: '',
          index: props.ind
      };
    }
  
    // Set the dummyData when the component mounts
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNewCom(this.state.inputValue, this.state.index);
    }

    // Update the input's value when entering a keystroke
    updateInputValue(e) {
        this.setState({
          inputValue: e.target.value
        });
    }
  
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Input placeholder="Add a comment..." value={this.state.inputValue} onChange={e => this.updateInputValue(e)} name="comInput" />
    
                <img src={require("./img/comment-dots.png")} alt="comment dots"/>
            </Form>
        )
    }
}



export default CommentInput;