import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    return (
        <form onSubmit={props.toggleSelected}>
             <input
                value={props.value} 
                onChange={props.onChange}
                className="searchbar"
                placeholder="Search here"    
             />
        </form>
   
    )
}

export default SearchBar;