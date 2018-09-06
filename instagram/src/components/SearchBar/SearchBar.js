import React from 'react';
import '../../index.css';
import './Search.css';

import styled from "style-components";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
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
      <section className="search">
        <div className="logo">
        </div>
        <form>
          <input placeholder="Search" onChange={this.props.search} />
        </form>
        <div className="icons">
          <div className="compass"></div>
          <div className="heart"></div>
          <div className="person"></div>
        </div>
      </section>
    )
  }
}

export default SearchBar;