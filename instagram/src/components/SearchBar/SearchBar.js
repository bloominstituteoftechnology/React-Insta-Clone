import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    return (
        <form>
             <input
                type="text"
                onKeyDown={props.toggleSelected}
                className="searchbar"
                placeholder="Search here"    
             />
        </form>
   
    )
}

export default SearchBar;