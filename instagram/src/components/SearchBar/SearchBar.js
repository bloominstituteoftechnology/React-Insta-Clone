import React from 'react';
import './searchBar.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'
 


const SearchBar = () => {
    
    return (
        <div className = "search-main-div">
            <div>
                <img src = "./instagram-logo.png"/>
            </div>

            <div>
                <input type="search" placeholder="Search..."  />
            </div>
            
            <div className = "social-div">
                <img src = {./img/compass.png }/>
                <img src = "./img/heart.png"/>
                <img src = "./img/user-circle.png"/>
              
              {/*} <i className="fa fa-compass"></i>
                <i class="fa fa-heart"></i>
                <i class="fal fa-user-circle"></i>  */}
            </div>
        </div>
    )
};

export default SearchBar;
