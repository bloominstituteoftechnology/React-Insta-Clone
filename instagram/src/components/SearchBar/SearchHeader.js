import React from 'react';
import Links from './Links.js';
import Search from './Search.js';
import Icons from './Icons.js';
import './SearchHeader.css';

const SearchHeader = () => {
    return (
        <div className="searchHeader">
          <Links logo="" titleLogo="Instagram" />
          <Search />
          <Icons icon="Hello" />
        </div>
    );
}

export default SearchHeader;