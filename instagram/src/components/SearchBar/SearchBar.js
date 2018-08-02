import React from 'react';
import {Input} from 'reactstrap';


const SearchBar = () => {
    return (
        <div className = "search-field">
             <Input type = "search" placeholder = "search"/>
        </div>
    )
}

export default SearchBar