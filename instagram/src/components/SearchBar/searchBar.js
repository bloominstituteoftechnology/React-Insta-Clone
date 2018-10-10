import React from 'react';
import '../ig.css';

//Initiate component
const SearchBar = props => {
    return (
        <div>
                <input type="text" name="temp" onChange={props.inputHandler} className="searchForm" placeholder="search..." value={props.temp}/>
        </div>
    )
};
//Export
export default SearchBar;