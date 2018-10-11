import React from 'react';
import styled from 'styled-components';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from './@fortawesome/react-fontawesome';
// import { faInstagram, faCompass, faHeart, faUser} from '@fortawesome/free-solid-svg-icons';

// library.add(faInstagram, faCompass, faHeart, faUser)
const Header = styled.div` 
  border-bottom: 1px solid lightgray;
  display: flex;
  height: 75px;
  justify-content: space-between;
`;

const SearchInput = styled.div` 
  width: 23%;
  height: 20px;
  padding: 10px;
  text-align: center;
  border: 1px solid lightgray;
  margin-top: 25px;
  background: whitesmoke;
  font-size: 14px;
`;

const SearchBar = props => {
  return(
    <div className="search">
      <div className="search-left">
        <i className="fab fa-instagram fa-2x"></i>
        <p className="line">|</p>
        <p className="instagram"> Instagram</p>
      </div>
      <input 
        className="search-input"
        type="text"
        name="filterTarget"
        placeholder="search"
        value={props.filterTarget}
        onChange={props.changeHandler}
      />
      <div className="right-icons">
        <i className="far fa-compass fa-2x"></i>
        <i className="far fa-heart fa-2x"></i>
        <i className="far fa-user fa-2x"></i>
      </div>
    </div>
  )
}

//<FontAwesomeIcon icon=/>
export default SearchBar