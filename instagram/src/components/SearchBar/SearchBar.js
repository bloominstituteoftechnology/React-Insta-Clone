import React from 'react';

import {
  StyledSearchBar,
  StyledHeaderLeft,
  StyledSocialSearchBar,
  StyledSearchBarInput
} from './SearchBarStyle';

import CameraLogo from './images/CameraLogo.png';
import InstagramLogo from './images/InstagramLogo.png';
import line from './images/line.png';
import compass from './images/compass.jpg';
import instaheart from './images/instaheart.png';
import person from './images/person.png';

import './SearchBar.css';

const SearchBar = props => {
  return (
    <StyledSearchBar>
      <StyledHeaderLeft>
        <img src={CameraLogo} className="logo" alt="logo" />
        <img src={line} className="line" alt="line" />
        <img src={InstagramLogo} className="instagram" alt="Instagram" />
      </StyledHeaderLeft>
      <StyledSearchBarInput>
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
      </StyledSearchBarInput>

      <StyledSocialSearchBar>
        <img src={compass} className="compass" alt="compass" />
        <img src={instaheart} className="heart" alt="heart" />
        <img src={person} className="person" alt="person" />
      </StyledSocialSearchBar>
    </StyledSearchBar>
  );
};

export default SearchBar;
