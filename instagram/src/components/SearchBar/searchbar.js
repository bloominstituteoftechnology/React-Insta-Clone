import React from 'react';
import './searchbar.css';

const SearchBar = () => {
    return ( 
        <div className="row search-bar d-flex justify-content-start align-items-center"> 
            <i className="fab fa-instagram col-1 insta-icon"></i>
            <img className="instagram-logo" src="https://cdn.iphoneincanada.ca/wp-content/uploads/2017/06/Instagram_logo.svg_.png" alt=""/>
            <form className="col-8">
                <input placeholder="search" type="text"/>
            </form>
        </div>



    );
}
 
export default SearchBar;