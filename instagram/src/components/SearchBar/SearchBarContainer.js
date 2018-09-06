import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import './SearchBar.css';
import styled, {css} from 'styled-components';
import sprites from '../SearchBar/imgs/download.png';

const Header = styled.header`
    border-bottom: 1px solid #3333;
    height: 50px;
    line-height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

const Search = styled.input`
  width: 250px;
  height: 25px;
  border-radius: 4px;
  padding-left: 5%;
  border: 1px solid lightgray;
  &::-webkit-input-placeholder{
    text-align: center;
  }
`;

const Social = styled.div`
  width: 20px;
  height: 20px;
  padding: 4%;
  margin-right: 5%;
`;


const SearchBar = (props) => {
  return (
    <Header>
      <div className="image-wrapper">
        <div className='logo-image'></div>
      </div>
      <form onSubmit={props.searchSubmit}>
        <Search value={props.searchInput} placeholder="Search" onChange={props.searchPosts} />
      </form>
      <div className="social-wrapper">
        <Social>
          <div className='orb'></div>
        </Social>
        <Social>
        <div className='icon-heart'></div>
        </Social>
        <Social>
          <div className='little-guy'></div>
        </Social>
      </div>
    </Header>
  );
};

export default SearchBar;
