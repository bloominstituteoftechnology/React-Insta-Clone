import React from 'react';
import {Navbar, NavbarBrand, NavItem, NavLink, Nav} from 'reactstrap'; 
import InstaImage from '../../assets/instaimage.png'; 
import InstaCam from '../../assets/instacam.png'; 
import Compass from '../../assets/compass.png'; 
import Heart from '../../assets/heart.png'; 
import Profile from '../../assets/profile.png'; 
import './SearchBar.css'; 

const SearchBar = () => {
    return (
    <Navbar className="navbar-wrapper"> 
        <NavbarBrand>
            <div className="logo-layout">
                <div className="instacam-div-container">
                    <img className="logo" src={InstaCam} />
                </div>
                <div className="pipe"><span>|</span></div> 
                <div className="instaimage-div-container"> 
                    <img className="logo" src={InstaImage} />
                </div>  
            </div> 
        </NavbarBrand>
        <Nav> 
            <input className="search" type="text" placeholder="search" />
        </Nav>
        <NavbarBrand>
            <div className="icons-layout"> 
                <div className="icons-div-container"> 
                    <img className="logo" src={Compass} /> 
                </div>
                <div className="icons-div-container"> 
                    <img className="logo" src={Heart} /> 
                </div> 
                <div className="icons-div-container"> 
                    <img className="logo" src={Profile} /> 
                </div>  
            </div> 
        </NavbarBrand> 
    </Navbar> 
); 
}

export default SearchBar; 