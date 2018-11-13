import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';
import logo from '../../assets/instagram_logo.png';

const Header = props => {
    return (
        <header className="header">
            <div className="header__logo">
                <img className="header__logo--img" src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Instagram_simple_icon.svg/240px-Instagram_simple_icon.svg.png' />
                <div className="header__logo--img">|</div>
                <img className="header__logo--img" src={logo} />
            </div>

            <SearchBar 
                handleInputChange={props.handleInputChange}
                filter={props.filter}
            />

            <div className="header__menu">
                <i class="far fa-compass"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-user"></i>
            </div>
        </header>
    );
}

export default Header;