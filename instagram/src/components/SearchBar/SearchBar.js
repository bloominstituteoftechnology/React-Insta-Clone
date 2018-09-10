import React from 'react';
import '../../index.css';
import './Search.css';

import styled from "styled-components";

const Wrapper = styled.section`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 2%;
  background-color: white;
  border-bottom: 1px solid lightgray;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10%;
`;

const Search = styled.input`
  border-radius: 5px;
  padding: 5px 5%;
  font-weight: bold;
`;

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputSearch: ''
    }
  }


  render() {
    return(
      <Wrapper>
        <span className="logo">
        </span>
        <form>
          <Search placeholder="Search" onChange={this.props.search} />
        </form>
        <Icons>
          <span className="compass"></span>
          <span className="heart"></span>
          <span className="person"></span>
        </Icons>
      </Wrapper>
    )
  }
}

export default SearchBar;