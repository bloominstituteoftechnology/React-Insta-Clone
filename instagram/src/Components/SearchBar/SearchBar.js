import React from 'react';
import icon_instagram_2 from '../../assets/icon_instagram_2.jpg';
import instagram_logo from '../../assets/instagram_logo.jpg';
import like from '../../assets/like.png';
import person from '../../assets/person.png';
import instagram_compass from '../../assets/instagram_compass.jpg';
import './SearchBar.css';
const SearchBar = props => {
    return (
        <div class = "navBarWrapper">
        <img class = "instaNotGramLogoIcon" src = {icon_instagram_2} alt = "InstaNotGramIcon"/>
        
        <img class = "instaNotGramLogoText" src = {instagram_logo} alt = "InstaNotGramTextLogo"/>
        
        <input class = "searchBarInput" type ="text" placeholder = "Search"/>
            <div class = "icons">
            <img class = "instagramIcon" src = {instagram_compass} alt = "InstaNotGramCompass"/>
            <img class = "instagramIcon" src = {like} alt = "InstaNotGramHeart"/>
            <img class = "instagramIcon" src = {person} alt = "InstaNotGramPerson"/>
            </div>
        </div>
        
    )
}

export default SearchBar;