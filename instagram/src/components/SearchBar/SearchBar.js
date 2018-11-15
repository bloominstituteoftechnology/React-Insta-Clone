import React from 'react';
import instagram from '../icons/instagram.png';
import { Instagram, Heart, MapPin, User } from 'react-feather';
import { StyledSearchBarContainer, StyledSearchBar, SearchBarLeft, SearchBarRight, SearchForm} from "../Styles";

const SearchBar = props => {
  return (
      <div>
      <StyledSearchBarContainer>
        <SearchBarLeft>
        <Instagram />
      <img id="instagram" src={instagram} alt=""/>
      </SearchBarLeft>
      <SearchForm>
      <StyledSearchBar
      type="text" 
      value={props.searchText} 
      onChange={props.updateSearchText} 
      placeholder="Search"
      />
      </SearchForm>
      <SearchBarRight>
      <MapPin />
      <Heart />
      <User onClick={props.logout}/>
      </SearchBarRight>
      </StyledSearchBarContainer>
    </div>
  )
}

export default SearchBar;