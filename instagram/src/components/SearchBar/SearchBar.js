import React from 'react';
import './searchBar.css';
import styled, { css } from "styled-components";

const Header = styled.header`
  border-bottom: 1px solid #3333;
  height: 80px;
  line-height: 70px;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
`;



// const Divider = styled.span`
//   width: 50px;
 
// `;

// const InputWrapper = styled.div`
//   width: 300px;
//   margin: auto;
//   display: flex;
// `;

// const SearchInput = styled.input`
//   height: 30px;
//   width: 300px;
//   text-align: center;
// `;

// const IconsWrapper = styled.div`
//   display: flex;
//   width: 300px;
// `;
// const SearchIcon = styled.i`
//   position: absolute;
//   display: inline;
//   top: 33px;
//   padding-left: 10px;
// `;
// const SocialDiv = styled.div`
//   width: 50px;
//`;

const SearchBar = props => {
  return (
    <Header>
    <div>
    <div>
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
      </div>
      <div className="social-wrapper">
        <div className="social">
          <i className="fa fa-compass" />
        </div>
        <div className="social">
          <i className="fa fa-heart" />
        </div>
        <div className="social">
          <i className="fa fa-user-circle" />
        </div>
      </div>
    </div>
    </Header>
  );
};
export default SearchBar;