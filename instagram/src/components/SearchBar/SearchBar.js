import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import './SearchBar.css';

import logo from '../../img/insta-logo.png';
import title from '../../img/insta-title.png';

import compass from '../../img/insta-compass.png';
import heart from '../../img/insta-heart.png';
import profile from '../../img/insta-profile.png';



const SearchBar = (props) => {

  const Header = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    max-width: 942px;

    box-sizing: border-box;
    padding: 5px 0px;
    margin: 0 auto;
  `;

  const LogoHeader= styled.div`
    display: flex;
    align-items: center;
    flex-grow: .3;

    p {
      margin: 0 3% 10px 5%;
      font-size: 2.4rem;
      opacity: .3
    }
  `;

  const Button = styled.button`
    border: none;
    background-color: #833ab4;
    color: white;
  `

  const LogoImg = styled.img`
    height: 25px;
  `;

  return(
    <div className="search-container">
    <Header>
      <LogoHeader>
        <LogoImg src={logo} alt="instagram logo" />
        <p>|</p>
        <LogoImg src={title} alt="Instagram" />
      </LogoHeader>

      <input type="text" placeholder={"Search"} onChange={props.searchHandler} defaultValue={props.term}/>

      <div className="search-bar__icons">
        <img src={compass} alt="Instagram" />
        <img src={heart} alt="Instagram" />
        <img src={profile} alt="Instagram" />
        <Button onClick={props.logout}>Sign Out</Button>
      </div>
      </Header>
    </div>
  );

}

SearchBar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  searchHandler: PropTypes.func,
  logout: PropTypes.func,
}

export default SearchBar;
