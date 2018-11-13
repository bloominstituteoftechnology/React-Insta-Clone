import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../img/1024px-Instagram_logo.svg.png';
import './Navigation.css'

const Navigation = props => {
    return(
        <React.Fragment>
            <div className="instagram-logos">
                <i className="fab fa-instagram"></i>
                <p>|</p>
                <img className="instagram-logo-text" src={logo} alt="Instagram"/>
            </div>
            <SearchBar handlesChanges={props.handlesChanges} searchText={props.searchText}/>
            <div className="header-icons">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </React.Fragment>
    );
}

export default Navigation;