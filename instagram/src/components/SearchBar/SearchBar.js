import React from 'react';
import instagram from '../icons/instagram.png';
import { Instagram, Heart, MapPin, User } from 'react-feather';
import { StyledSearchBarContainer, StyledSearchBar} from "../Styles";

const SearchBar = props => {
  return (
      <div>
      <StyledSearchBarContainer>
        <Instagram />
      <img id="instagram" src={instagram} alt=""/>
      <form >
      <StyledSearchBar
      type="text" 
      value={props.searchText} 
      onChange={props.updateSearchText} 
      placeholder="Search"
      />
      </form>
      <MapPin />
      <Heart />
      <User onClick={props.logout}/>
      </StyledSearchBarContainer>
    </div>
  )
}

export default SearchBar;