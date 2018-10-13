import React from 'react';
import {
  Header, 
  SearchInput, 
  LeftHeader, 
  InstagramFont, 
  TheLine, 
  RightHeader,
  FontAwesome} from './HeaderStyles'

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from './@fortawesome/react-fontawesome';
// import { faInstagram, faCompass, faHeart, faUser} from '@fortawesome/free-solid-svg-icons';
// library.add(faInstagram, faCompass, faHeart, faUser)


const SearchBar = props => {
  return(
    <Header>
      <LeftHeader>
        <FontAwesome className="fab fa-instagram fa-2x"></FontAwesome>
        <TheLine>|</TheLine>
        <InstagramFont> Instagram</InstagramFont>
      </LeftHeader>
      <SearchInput
        type="text"
        name="filterTarget"
        placeholder="search"
        value={props.filterTarget}
        onChange={props.changeHandler}
      />
      <RightHeader>
        <FontAwesome className="far fa-compass fa-2x"></FontAwesome>
        <FontAwesome className="far fa-heart fa-2x"></FontAwesome>
        <FontAwesome className="far fa-user fa-2x"></FontAwesome>
      </RightHeader>
    </Header>
  )
}

export default SearchBar