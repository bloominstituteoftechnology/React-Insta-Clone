import React, { Component } from 'react';
import styled from 'styled-components';

const SearchBarFormInput = styled.input`
  min-width: 250px;
  width: 20vw;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  outline: 0;
  padding: 3px 30px 3px 20px;
  font-size: 1.6rem;
`;

class SearchBarForm extends Component {
  constructor(props) {
    super();
    this.state = {
      searchTerm: ''
    }
  }

  onSearchChange = e => {
    this.setState({searchTerm: e.target.value});
  }

  render() {
    return (
      <form onSubmit={(e) => this.props.onSearchPosts(e, this.state.searchTerm)}>
        <SearchBarFormInput type="text" placeholder="Search" value={this.state.searchTerm} onChange={this.onSearchChange} />
      </form>
    );
  }
}

export default SearchBarForm;