import React from 'react';
import Links from './Links.js';
import Search from './Search.js';
import Icons from './Icons.js';
import './SearchHeader.css';

const SearchHeader = () => {
    return (
        <div className="searchHeader">
          <Links logo="Hello" titleLogo="Instagram" />
          <Search />
          <Icons logo="Hello" titleLogo="Instagram" />
        </div>
    );
}

export default SearchHeader;