import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className='search-bar'>
            <i className="fab fa-instagram"></i>
            <p>|</p>
            <img src={require('../../img/logo.png')} alt="Instagram" />
            <form>
                <input type="text" placeholder="Search" />
            </form>
            <div className="social-icons">
                <div className="icon">
                    <i className="fa fa-compass"></i>
                </div>
                <div className="icon">
                    <i className="fa fa-heart"></i>
                </div>
                <div className="icon">
                    <i className="fa fa-user-circle"></i>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;