import React from 'react';
import './search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Instagram from './instagram.svg';
// import PropTypes from "prop-types";

const SearchBar = (props) => {
    return (
        <section className="search-bar">
            <section className="insta-logo">
                <img src={ Instagram } alt="instagram logo" heigh="50px" width="50px"></img>
                <p>|</p>
                <h1>Instagram</h1>
            </section>
            <section className="search-box">
                <input placeholder=" Search"></input>
            </section>
            <section className="search-icons">
                <FontAwesomeIcon icon="compass" />
                <FontAwesomeIcon icon="heart" />
                <FontAwesomeIcon icon="user" />
            </section>
        </section>
    )
}

// SearchBar.propTypes = {

// };

export default SearchBar;