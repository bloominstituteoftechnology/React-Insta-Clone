import React from 'react';
import './SearchBar.css';
import IGLogo from '../../img/inst-logo-01.png';

const SearchBar = props => {

    return (
        <div className="search-bar">
            <div className="instalogo-container">
                <img src={IGLogo} alt="insta logo" className="instalogo"/>
            </div>
            <form onSubmit={props.search}>
                <input 
                    type="text" 
                    placeholder="Search" className="search-input"
                    onChange={props.searchPost}
                />
            </form>
            
        </div>
    );
}

export default SearchBar;