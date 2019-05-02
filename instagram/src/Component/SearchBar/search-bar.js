import React from "react";
import insta_text_logo from "../../images/instagram-text-logo.png";
import compass from "../../images/compass.png";
import insta_heart_logo from "../../images/Instagram-Heart.png";
import insta_person_logo from "../../images/Instagram-Person.png";
import insta_logo from "../../images/insta_logo.png";
import './SearchBar.css';


const SearchBar = (props) => {
    return (
        <div className="search-bar-wrapper">
            <div>
                <img className="instalogo" src={insta_logo} />
                <img className="logoimg" src={insta_text_logo} />
            </div>

            <form className="instaform">
                <input  className = "input"type="text" placeholder="Search" onKeyUp={props.search} />
            </form>

            <div className="social-wrapper">
                <div>
                    <img className="social" src={compass} />
                </div>
                <div>
                    <img className="social" src={insta_heart_logo} />
                </div>
                <div>
                    <img className="social" src={insta_person_logo} />
                </div>
            </div>
        </div>
    )
}


export default SearchBar;