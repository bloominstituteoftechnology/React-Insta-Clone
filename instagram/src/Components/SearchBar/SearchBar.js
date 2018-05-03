import React from 'react';
import icon_instagram_2 from '../../assets/icon_instagram_2.jpg';
import instagram_logo from '../../assets/instagram_logo.jpg';
import like from '../../assets/like.png';
import person from '../../assets/person.png';
import instagram_compass from '../../assets/instagram_compass.jpg';
import './SearchBar.css';
import dummyData from '../../dummy-data';

const SearchBar = props => {
    return (
    <div className = "container">
        <img className = "instaNotGramLogoIcon" src = {icon_instagram_2} alt = "InstaNotGramIcon"/>
        <div className = "SearchandTextLogo">
            <img className = "instaNotGramLogoText" src = {instagram_logo} alt = "InstaNotGramTextLogo"/>
            <input className = "searchBarInput" type ="text" placeholder = "Search here"/>
        </div>
        
        <div className = "icons">
            <img className = "instagramIcon compass" src = {instagram_compass} alt = "InstaNotGramCompass"/>
            <img className = "instagramIcon likes" src = {like} alt = "InstaNotGramHeart"/>
            <img className = "instagramIcon person" src = {person} alt = "InstaNotGramPerson"/>
        </div>
            {/* icons */}
    
    </div>//container
    )
}

export default SearchBar;