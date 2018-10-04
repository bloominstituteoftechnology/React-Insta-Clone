import React from 'react';
import './Searchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavigationSearchBar = (props) => {
    return (
        <div className="nav-search-bar">
         <FontAwesomeIcon className="icon" icon="compass" />
         <FontAwesomeIcon className="icon" icon="heart" />
         <FontAwesomeIcon className="icon" icon="user" />
        </div>
    );
};


export default NavigationSearchBar;