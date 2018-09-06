import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import styled from 'styled-components';

const HeaderContainer = props => {
const HeaderWrapper = styled.div`
  background: #222;
  height: 200px;
  padding: 20px;
  color: white;
`;
const UserDashboard = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  width: 25%;
  `;
  const LogoutButton = styled.button`
    display: flex;
    justify-content: center;
    align-self: center;
    height: 2rem;
    width: 30%;
    font-size: .7rem;
    background: lightgreen;
  `;

    return (
      <HeaderWrapper>
      <header className="header">
      <UserDashboard>
      <h2>Welcome, {localStorage.username}!</h2>
      <LogoutButton
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }
      }>Logout</LogoutButton>
      </UserDashboard>
      <div className="searchbar">
        <h1 className="title-headline">NOT Instagram</h1>
        <SearchBar
        searchPosts={props.searchPosts}
        handleChange={props.handleChange}/>
        </div>
        </header>
        </HeaderWrapper>
    )

}

export default HeaderContainer;
