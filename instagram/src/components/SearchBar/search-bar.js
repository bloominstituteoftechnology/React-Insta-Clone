import React from 'react';
import insta_logo from '../../images/insta_logo.png';
import instagramTextLogo from'../../images/instagram-text-logo.png';
import compass from '../../images/compass.png';
import heart from '../../images/Instagram-Heart.png';
import person from '../../images/Instagram-Person.png';
import line from'../../images/line.png';

const SearchBar = (props) => {
    return (
    <div className = 'searchBarContainer'>
        <div className  = 'leftContent'>
            <img className ='instaLogo' src={insta_logo} alt = 'logo' />
            <img className = 'line' src ={line} alt = 'line' />
            <img className = 'textLogo' src={instagramTextLogo} alt = 'text logo'/>
        </div>

        <div className = 'searchBarFunction'>
            <form  className ='searchBar' action ='submit'>
            <input className = 'search' placeholder='Search' type ='text'/>
            </form>
        </div>

        <div className ='rightContent'>
            <img className ='compass' src={compass} alt ='compass' />
            <img className = 'heart' src = {heart} alt ='heart'/>
            <img className ='person' src ={person} alt = 'person'/>
        </div>
    </div>
    )}


export default SearchBar;
