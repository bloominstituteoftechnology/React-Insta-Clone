import './SearchBar.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import PropType from 'prop-types';
import {faCompass} from '@fortawesome/free-solid-svg-icons';


library.add(faHeart);
library.add(faUserCircle);
library.add(faCompass);



const SearchBar = (props) => {

    return (
        <div className="searchbar">
        <div className="logo-div">
            <img className="instalogo"src="https://i1.wp.com/www.vectorico.com/wp-content/uploads/2018/02/Instagram-Logo.png?resize=300%2C300"/>
            <img className='instaword' src='https://cdn.worldvectorlogo.com/logos/instagram-1.svg'  />
        </div>

        <input type='text' placeholder="Search" />
        <div className='icon-div'>
        <FontAwesomeIcon className="icon" icon="compass" />
        <FontAwesomeIcon icon="heart" />
        <FontAwesomeIcon icon="user-circle" />
        </div>
        
        </div>
    )

}

export default SearchBar;