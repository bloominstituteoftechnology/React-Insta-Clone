import React from 'react';
import SearchBarLogo from './SearchBarLogo';
import SearchBarInput from './SearchBarInput';
import SearchBarMenu from './SearchBarMenu';

function SearchBarContainer(props) {
    return(
        <div>
            <SearchBarLogo />
            <SearchBarInput />
            <SearchBarMenu />
        </div>
    )
}

export default SearchBarContainer;