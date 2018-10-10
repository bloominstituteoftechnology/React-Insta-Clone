import React from 'react';
// import { faInstagram } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';


const SearchBar = () => {
    return (
        <div className = "search-master-cont">
            <section className = "line-break">
                <hr/>
            </section>

            <div className = "search-cont">

            <section className = "img-container">
            {/* <img src = '#' alt = "insta-cam"/> border-right  */}
            <i className="fab fa-instagram"></i>
            <img className = "instagram-text" src = "#" alt = "instagram"/>
            </section>

            <section className = "search-container">
                <input type = "text" defaultValue = "Search"/>
            </section>

            <section className = "int-buttons-cont">
            <img src = '#' alt = "Compass"/>
            <img src = '#' alt = "Heart"/>
            <img src = '#' alt = "Person"/>
            </section>

            </div>

            <section className = "line-break">
                <hr/>
            </section>
        </div>
    );
}

export default SearchBar