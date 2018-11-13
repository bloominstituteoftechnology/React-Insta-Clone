import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PropTypes from 'prop-types';
import './Header.css';
import logo from '../../assets/instagram_logo.png';

const Header = props => {
    return (
        <header className="header">
            <div className="header__logo">
                <img className="header__logo--img logo" alt="instagram logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Instagram_simple_icon.svg/240px-Instagram_simple_icon.svg.png' />
                <div className="header__logo--img">|</div>
                <img className="header__logo--img words" src={logo} alt="Instagram Word"/>
            </div>

            <SearchBar 
                handleInputChange={props.handleInputChange}
                filter={props.filter}
            />

            <div className="header__menu">
                <div className="far fa-compass"></div>
                <div className="far fa-heart"></div>
                <div className="far fa-user"></div>
            </div>
        </header>
    );
}

Header.propTypes = {
    filter: PropTypes.string,
    handleInputChange: PropTypes.func
};

export default Header;