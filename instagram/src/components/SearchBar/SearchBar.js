import React from 'react';
import camera from '../icons/camera.png'; //delete these
import heart from '../icons/heart.png';
import instagram from '../icons/instagram.png';
import marker from '../icons/marker.png';
import user from '../icons/user.png';
import { Instagram, Heart, MapPin, User } from 'react-feather';
import { StyledSearchBarContainer, StyledSearchBar} from "../Styles";

const SearchBar = props => {
  return (
      <div>
      <StyledSearchBarContainer>
        <Instagram />
      {/* <img src={camera} alt=""/> */}
      <img id="instagram" src={instagram} alt=""/>
      <StyledSearchBar
      type="text" 
      value={props.searchText} 
      onChange={props.updateSearchText} 
      placeholder="Search"
      onSubmit={props.filterPosts}
      />
      <MapPin />
      <Heart />
      <User onClick={props.logout}/>
      {/* <img src={marker} alt=""/>
      <img src={heart} alt=""/>
      <img src={user} alt=""/> */}
      </StyledSearchBarContainer>
    </div>
  )
}

export default SearchBar;