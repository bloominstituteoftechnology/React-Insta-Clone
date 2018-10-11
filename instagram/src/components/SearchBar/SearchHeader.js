import React from 'react';
import Links from './Links.js';
import Search from './Search.js';
import Icons from './Icons.js';
import { SearchHead } from '../../Styles';

const SearchHeader = props => {
    return (
        <SearchHead>
          <Links logo="" titleLogo="Instagram" />
          <Search          
          searchPostsHandler={props.searchPostsHandler}
          filterTarget={props.filterTarget}
          />
          <Icons icon="Hello" />
        </SearchHead>
    );
}

export default SearchHeader;