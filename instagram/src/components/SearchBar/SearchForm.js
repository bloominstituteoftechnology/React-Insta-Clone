import React from "react";
import './SearchBar.css';


const SearchForm = props => {
    return (
    //    <form>
            <input 
                className="search-box" 
                name="searchText"
                type="text" 
                size="40" 
                value={props.searchText}
                placeholder="Search"
                onChange={props.handleChange}>
            </input> 
        // </form>
    )
}

export default SearchForm;