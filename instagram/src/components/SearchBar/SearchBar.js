import React from 'react';
import insta from '../../insta.svg';
import user from '../../user.svg';
import compass from '../../compass.svg';
import heart from '../../heart.svg';
import './SearchBar.css';

const SearchBar = (props) => {
    return (
        <div className="searchBar">
            <div className="brand">
                <img src={insta} width="40px" />
                <h1>Instagram</h1>
            </div>
            <input placeholder= "&#128269; Search" onKeyPress={props.search}/>
            <div className="searchNav">
                <img src={compass} width="25px"/>
                <img src={heart} width="25px"/>
                <img src={user} width="25px"/>
            </div>
        </div>
    )
}

export default SearchBar