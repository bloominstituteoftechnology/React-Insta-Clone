import React from 'react';
import '../SearchBar/searchstyle.css';
import  logo from './logo.png';
import logo2 from './logo2.png';
import location from './location.ico';
import heart2 from './heart2.png';
import human from './human.png';


const SearchBar = props => {
    return (
        <div className="top">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <div className="logo2">
                <img src={logo2} alt=""/>
            </div>
            <input type="text" placeholder="Search"/>
            <div className="imgholder">
                <img src={location} alt=""/>
                <img src={heart2} alt=""/>
                <img src={human} alt=""/>
            </div>
        </div>
    )
}
 
export default SearchBar;