import React from 'react';
import './searchBar.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import instagram from './instagram.png'; 
import heart from './heart.png';
import compass from './compass.png';
import userCircle from './userCircle.png';


const SearchBar = (props) => {
    
    return (
        <div className = "search-main-div">
            <div>
                <img src = {instagram} alt = "instagram-logo"/> 
            </div>

            <div>
                <input 
                    type="search" 
                    placeholder="Search..." 
                    onKeyDown = {props.searchPosts}
                />
            </div>
            
            <div className = "social-div">
                <img src = {compass} alt = "social-compass-logo"/>
                <img src = {heart} alt = "heart-logo"/>
                <img src = {userCircle} alt = "user-circle-logo"/>
                
                 {/*<i className="fa fa-compass"></i>
                <i class="fa fa-heart"></i>
                <i class="fal fa-user-circle"></i>  */}
            </div>
        </div>
    )
};

export default SearchBar;
