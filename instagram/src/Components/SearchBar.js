import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  border-bottom: 1px solid lightgray;
  display: flex;
  height: 75px;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-between;
  align-items: center;
`;

const Right = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchBar = props => {
  return(
    <Header>
      <Left>
        <i className="fab fa-instagram fa-2x" />
        <p className="line">|</p>
        <p className="insta-border">Instagram</p>
      </Left>
      <input type="text" placeholder="Search"
      className="search-input" value={props.filterTarget}
      onChange={props.changeHandler} name='filterTarget'/>
      <Right>
        <i className="far fa-compass fa-2x" />
        <i className="far fa-heart fa-2x" />
        <i className="far fa-user fa-2x" />
      </Right>
    </Header>
  );
}

export default SearchBar;

