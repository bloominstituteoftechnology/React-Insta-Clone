import React from 'react';
import './Searchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavigationSearchBar = (props) => {
    return (
        <div className="nav-search-bar">
         <div><FontAwesomeIcon className="icon" icon="compass" /></div>
         <div><FontAwesomeIcon className="icon" icon="heart" /></div>
         <div><FontAwesomeIcon className="icon" icon="user" /></div>
        </div>
    );
};


export default NavigationSearchBar;