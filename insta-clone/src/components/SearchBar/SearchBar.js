import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchBar.css';

const SearchBar = (props) => {
    return(
        <div className="search-bar">
            <div className="instagramIcon">
                <FontAwesomeIcon icon={['fab', 'instagram']} className="icon" /> | <img src="https://3rockmarketing.com/wp-content/uploads/2016/09/instagram-logo.png" alt="instagram" className="instagram-text" />
            </div>
            <input type="text" placeholder="Search" onChange={props.onSearch} ></input>
            <div className="icon-holder">
                <FontAwesomeIcon icon={['far', 'compass']} className="icon" />
                <FontAwesomeIcon icon={['far', 'heart']} className="icon" />
                <FontAwesomeIcon icon={['far', 'user']} className="icon" />
            </div>
        </div>
    );
}

export default SearchBar;