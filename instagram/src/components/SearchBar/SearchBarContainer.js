import React from 'react';
import SearchBarLogo from './SearchBarLogo';
import SearchBarInput from './SearchBarInput';
import SearchBarMenu from './SearchBarMenu';

function SearchBarContainer(props) {
    return(
        <div>
            <SearchBarLogo />
            <form onSubmit={props.search} onChange={props.handleChanging}>
                <input
                    type = "text"
                    name = "search"
                    placeholder = "search"
                />
            </form>
            <SearchBarMenu />
        </div>
    )
}

export default SearchBarContainer;