import React from 'react';
import './SearchBar.css';
import Logo from './Logo';
import SearchInput from './SearchInput';
import ThreeIcons from './ThreeIcons';


const SearchBar = () => {
  return ( 
      <div className="search-bar">

       <Logo />
       <SearchInput />
       <ThreeIcons />

      </div> 
    );
}
 
export default SearchBar;
