import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';
import InstaImage from '../../assets/instaimage.png';
import InstaCam from '../../assets/instacam.png';
import Compass from '../../assets/compass.png';
import Heart from '../../assets/heart.png';
import Profile from '../../assets/profile.png';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <Navbar className="navbar-wrapper">
            <NavbarBrand className="navbar-brand">
                <img alt="" src={InstaCam} className="instagram-camera-logo" />
                <img alt="" src={InstaImage} className="instagram-image-logo" />
            </NavbarBrand>
            <NavbarBrand className="navbar-brand">
                <input type="text" placeholder="search" />
            </NavbarBrand>
            <NavbarBrand className="navbar-brand navbar-brand-right">
                <img alt="" className="icons" src={Compass} />
                <img alt="" className="icons" src={Heart} />
                <img alt="" className="icons third-icon" src={Profile} />
            </NavbarBrand>
        </Navbar>
    )
}

export default SearchBar;

// const SearchBar = () => {
//     return (
//         <Navbar className="navbar-wrapper">
//             <NavbarBrand className="navbarbrand-left">
//                 <div className="logo-layout">
//                     <div className="instacam-div-container">
//                         <img alt="" className="logo" src={InstaCam} />
//                     </div>
//                     <div className="pipe"><span>|</span></div>
//                     <div className="instaimage-div-container">
//                         <img alt="" className="logo" src={InstaImage} />
//                     </div>
//                 </div>
//             </NavbarBrand>
//             <Nav>
//                 <input className="search" type="text" placeholder="search" />
//             </Nav>
//             <NavbarBrand>
//                 <div className="icons-layout">
//                     <div className="icons-div-container">
//                         <img alt="" className="logo" src={Compass} />
//                     </div>
//                     <div className="icons-div-container">
//                         <img alt="" className="logo" src={Heart} />
//                     </div>
//                     <div className="icons-div-container">
//                         <img alt="" className="logo" src={Profile} />
//                     </div>
//                 </div>
//             </NavbarBrand>
//         </Navbar>
//     );
// }

// export default SearchBar; 