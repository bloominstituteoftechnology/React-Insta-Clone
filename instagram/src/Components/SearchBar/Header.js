import React from 'react';
import SearchBar from './SearchBar';
import './header.css';

const Header = (props) => {
    return (
        <div className='header-container'>
            <i className="icon fab fa-instagram fa-3x"></i> |
            <div className='instaham'>Instaham</div>
            <SearchBar changeSearchTerm={props.changeSearchTerm}/>

            <i className="icon far fa-compass fa-3x"></i>
            <i className="icon far fa-heart fa-3x"></i>
            <i className="icon far fa-user fa-3x"></i>
        </div>
    )
}

export default Header;