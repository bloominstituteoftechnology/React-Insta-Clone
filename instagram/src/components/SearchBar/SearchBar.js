import React from 'react';

const SearchBar = props => {
    return (
        <div className="search-bar">
            <i class="fab fa-instagram fa-2x"></i>
            <form>
                <i class="fas fa-search"></i>
                <input 
                    className="search" 
                    type="text" 
                    placeholder="              Search" />
            </form>
        </div>
    );
};

export default SearchBar;