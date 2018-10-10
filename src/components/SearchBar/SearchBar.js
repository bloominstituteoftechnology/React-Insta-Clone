import React from 'react';
import './search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Instagram from './instagram.svg';

const SearchBar = (props) => {
    return (
        <section className="search-bar">
            <section className="insta-logo">
                <img src={ Instagram } alt="instagram logo"></img>
                <p>|</p>
                <h1>Instagram</h1>
            </section>
            <section className="search-box">
                <input placeholder="🔍 Search" onChange={props.search}></input>
            </section>
            <section className="search-icons">
                <FontAwesomeIcon icon="compass" />
                <FontAwesomeIcon icon="heart" />
                <FontAwesomeIcon icon="user" />
            </section>
        </section>
    )
}

export default SearchBar;