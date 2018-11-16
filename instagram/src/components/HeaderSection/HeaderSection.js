import React from 'react';
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../icons/largeInstagram.png";
import camera from "../../icons/largeCamera.png";
import compass from "../../icons/largeCompass.png";
import heart from "../../icons/largeHeart.png";
import person from "../../icons/largePerson.png";
import './HeaderSection.css';

const HeaderSection = props => {
    return(
        <header className="header">
            <div className="icon-wrapper">
                <img className="icons" src={camera} alt="camera"></img>
                <img className="logo" src={logo} alt="logo"></img>
            </div>

            <SearchBar search={props.search}/>
            <div className="icon-wrapper">
                <img className="icons" src={compass} alt="compass"></img>
                <img className="icons" src={heart} alt="heart"></img>
                <img className="icons" src={person} alt="person icon"></img>
            </div>
        </header>
    );
}

export default HeaderSection;