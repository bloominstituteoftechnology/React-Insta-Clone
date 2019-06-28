import React from 'react';
import './search-bar.css';
import logo from '../../img/logo.png';
import explore from '../../img/explore.png';
import heart from '../../img/heart.png';
import profile from '../../img/profile.png';


const SearchBar = props => {


    return(
      <div className="search-bar">
             <img className="logo" src={logo}/>
             <input className="bar" type="text" placeholder="Search"/>
             <ul className="icons">
                 <li><img className="explore" src={explore}/></li>
                 <li><img className="heart" src={heart}/></li>
                 <li><img className="profile" src={profile}/></li>
             </ul>

      </div>
    )
}






export default SearchBar;