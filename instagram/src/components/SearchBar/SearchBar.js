import React from 'react';
import './SearchBar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SearchBar() {
    return (
        <div className="SearchBar">
            <div className="SearchBarIcon">
                Logo
            </div>
            <div className="SearchBarTitle">
                <h2>Instagram</h2>
            </div>
            <div className="SearchBarInput">
                <input type="text"></input>
            </div>
            <div className="SearchBarIcons">
                Icon 
                Icon 
                Icon 
            </div>
        </div>
    );
}