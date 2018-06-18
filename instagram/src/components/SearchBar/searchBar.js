import React from 'react';

const SearchBar = props => {
    return (
        <div>
           <input
           type = "text"           
           placeholder = "search"
           value = {props.value}
           />
        </div>
    )
}
 
export default SearchBar;