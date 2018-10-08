import React from 'react';

import Search from './search'


const SearchBar = props => {
    return (
        <div>
            <div classname= 'left-icons'>
                <i class="fab fa-instagram"></i>
                <p>|</p>
                <h1>Instagram</h1>
            </div>
            <Search />
            <div classname= 'right-icons'>
                <i class="far fa-compass"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-user"></i>
            </div>
        </div>
    );
}

export default SearchBar;