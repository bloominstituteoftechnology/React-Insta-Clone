import React from 'react';
import './Searchbar.css';



const SearchInput = (props) => {
    return(
        <div>
            <input onChange={props.onChange} value={props.value} placeholder='&#x1F50D; Search'></input>
        </div>
    );
};

export default SearchInput;