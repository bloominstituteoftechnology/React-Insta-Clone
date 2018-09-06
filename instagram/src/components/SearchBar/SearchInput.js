import React, { Component } from 'react';
import styled from "styled-components";
import {Input} from 'mdbreact';
import './SearchBar.css'

const Form = styled.form`
    width: 50%;
    margin-left: 30%;
`;

// Handles and displays the user's search
class SearchInput extends Component {
    constructor(props) {
      super(props);
      this.state = {
          inputValue: '',
          index: props.ind
      };
    }
  
    // Sends back a fuction that handles the search based on the input
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.hdlSearch(this.state.inputValue);
    }

    // Update the input value's based on the user's inputs
    updateInputValue(e) {
        this.setState({
          inputValue: e.target.value
        });
        this.handleSubmit(e);
    }
  
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Input value={this.state.inputValue} onChange={e => this.updateInputValue(e)} name="searchInput" label="Search" />
            </Form>
        )
    }
}

export default SearchInput;