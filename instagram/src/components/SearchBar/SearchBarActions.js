import React from 'react';
import styled, { css } from 'styled-components';
import sprites from'../instagram-sprites.png';

const SearchBarActionsAnchor = styled.a`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin: 0 0 0 24px;
  color: rgba(0,0,0,0);
  background: url(${sprites});
  background-size: 495px 483px;

  ${props => props.explore && css`
    background-position: -176px -399px;
  `}

  ${props => props.activity && css`
    background-position: -150px -425px;
  `}

  ${props => props.profile && css`
    background-position: -376px -399px;
  `}
`;

const SearchBarActions = (props) => {
  return(
    <div className="search-bar-actions">
      <SearchBarActionsAnchor explore href="explore">Explore</SearchBarActionsAnchor>
      <SearchBarActionsAnchor activity href="activity">Activity</SearchBarActionsAnchor>
      <SearchBarActionsAnchor profile href="profile">Profile</SearchBarActionsAnchor>
    </div>
  );
};

export default SearchBarActions;