import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    return ( 
        <div className ='searchBar'>
            <i className="fab fa-instagram"></i>
            <p className = 'logo'>Instagram</p>
            <input type = 'text' placeholder='search' className='search' onKeyDown = {props.searchPost}></input>
            <div className = 'searchIcons'>
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
            </div>
        </div>
     );
}
 
export default SearchBar;