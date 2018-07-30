import React from 'react';

const SearchBar = () => {
    return ( <div className="App-header">
        <div className="leftnav">
            <i className="fab fa-instagram"></i>
            <h4 className="instaText">Instagram</h4>
        </div>

        <form className="search">
        <input type="text" placeholder="Search" /> 
        </form>
        
        <div className="rightnav">
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i class="far fa-user"></i>
        </div>
    
    </div> );
}
 
export default SearchBar;