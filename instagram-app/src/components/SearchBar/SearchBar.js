import React from 'react';
import './SearchBar.css';
import { IoLogoInstagram, IoIosHeartEmpty } from "react-icons/io";
import { FiCompass, FiUser } from "react-icons/fi";

const SearchBar = ({ handleSearch, search }) => {
    return (
        <header className="header">
        <nav>
        <div className="logo__container">
                <div className="logo__icon">
                <IoLogoInstagram />
                </div>
                <h3 className="logo__text">
                    instagram
                </h3>
            </div>
            <input
            className="search"
            placeholder= "Search"
            value={search}
            onChange={handleSearch}
            />
            <div className="icon__container">
            <div><FiCompass /></div>
            <div><IoIosHeartEmpty /></div>
            <div><FiUser /></div>
            </div>
        </nav>
            
        </header>
    )
}

export default SearchBar;