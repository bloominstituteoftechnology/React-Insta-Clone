import React from 'react';
import Links from './Links.js';
import Search from './Search.js';
import Icons from './Icons.js';
import './SearchHeader.css';

const SearchHeader = props => {
    return (
        <div className="searchHeader">
          <Links logo="" titleLogo="Instagram" />
          <Search          
          postHandler={props.postHandler}
          filterTarget={props.filterTarget}
          />
          <Icons icon="Hello" />
        </div>
    );
}

export default SearchHeader;