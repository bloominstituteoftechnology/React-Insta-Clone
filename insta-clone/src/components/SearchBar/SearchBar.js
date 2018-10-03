import React from 'react'
import instacloneimg from './../../imgs/instacloneimg.png'
import './SearchBar.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCompass, faHeart } from "@fortawesome/free-regular-svg-icons";

library.add(faUser, faCompass, faHeart);


const SearchBar = () => {

    return (
        <div className="search-container">
            <div className= "search-content">
            <img className="img insta-clone"src={instacloneimg} alt="insta-clone" />
            <h1>Instaclone</h1>
                <form>
                    <input type='search'></input>
                </form>
                <div className="search icon-content">
                <FontAwesomeIcon icon={['far','compass']} />{" "}
                <FontAwesomeIcon icon={['far','heart']} /> {" "}
               <FontAwesomeIcon icon={['far', 'user']} />
                </div>
            </div>
        </div>
    )
}


export default SearchBar