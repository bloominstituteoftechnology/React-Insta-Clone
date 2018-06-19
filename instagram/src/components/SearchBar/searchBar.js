import React from 'react';
import './SearchBar.css';
import camera from '../../images/camera.png';
import instalogo from '../../images/instagram.png';
import compass from '../../images/compass.png';
import heart from '../../images/heart.png';
import person from '../../images/person.png';

const SearchBar = props => {
    return (
        <div className = "search-contain">
        <span className = "search-left">
            <img className ="camera" src = {camera} alt = "cam thumbnail"/>
            <img className ="instalogo" src = {instalogo} alt = "instalogo thumbnail"/>
        </span>
            <input className = "search-mid"
                type = "text"           
                placeholder = "search"
            />
        <span className = "search-right">
            <img className ="compass" src = {compass} alt = "compass thumbnail"/>
            <img className ="heart" src = {heart} alt = "heart thumbnail"/>
            <img className ="person" src = {person} alt = "person thumbnail"/>
        </span>
        </div>
    )
}
 
export default SearchBar;