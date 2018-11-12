import React from 'react';
import './SearchInput.sass';

const SearchInput = props => {
    return (
        <div className={props.active ? 'search--input active' : 'search--input'}>
            <input type="text" name="search" id="search" placeholder="Search" />
            <span className="search--icon_magnify" />
            <span className="search--icon_clear" />
        </div>
    );
};

export default SearchInput;
