import React from 'react';
import logo from '../img/instagram.png';
import * as styl from './SearchBarStyles';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <styl.FixedNav>
      <styl.Container>
        <styl.Header>
          <i className="fab fa-instagram fa-2x"></i>
          <styl.Divider></styl.Divider>
          <styl.Logo src={logo} alt="Instagram logo"></styl.Logo>
        </styl.Header>

        <styl.SearchInput
          type="text" placeholder="&#61442; Search"
          name='searchInput'
          value={props.searchInput}
          onChange={props.searchHandler}
          onKeyDown={props.searchPosts}>
        </styl.SearchInput>

        <styl.Menu>
          <i className="far fa-compass fa-lg"></i>
          <i className="far fa-heart fa-lg header-heart"></i>
          <i className="far fa-user fa-lg"></i>
        </styl.Menu>
      </styl.Container>
    </styl.FixedNav>
  );
};

export default SearchBar;
