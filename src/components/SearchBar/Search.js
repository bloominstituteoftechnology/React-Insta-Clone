import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = (props) => {
    // Gets props:
        // searchHandler: ()
    return (
        <input type='search' className='search' onKeyUp={props.searchHandler} placeholder='Search'/>
        
    );
};

export default Search;