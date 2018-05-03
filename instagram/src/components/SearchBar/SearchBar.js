import React from 'react';

const SearchBar = props => {
    return(
        <div>
            <i className='fa fa-instagram'></i>
            <span> | Instrgram</span>
            <input placeholder="Search" />
            <i className='fa fa-compass'></i>
            <i className='fa fa-heart'></i>
            <i className='fa fa-user'></i>
        </div>
    )   
}

export default SearchBar;