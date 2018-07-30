import React from 'react';
import './SearchBar.css';

const Search = props => {
    return (
        <div className='search-container'>
            <div><i class="fa fa-instagram search-icons" aria-hidden="true"> | Instagram</i></div>
            <div className='search'><span class="fa fa-search"></span><input placeholder='Search'></input></div>
            <div className='search-icons'>
                <i className="fa fa-compass search-icons" aria-hidden="true"></i>
                <i className="fa fa-heart-o search-icons" aria-hidden="true"></i>
                <i className="fa fa-user-o search-icons" aria-hidden="true"></i>
            </div>
            
        
         
        </div>
    )
}

export default Search;