import React from "react";
import insta_text_logo from "../../images/instagram-text-logo.png";
import line from "../../images/line.png";
import compass from "../../images/compass.png";
import insta_heart_logo from "../../images/Instagram-Heart.png";
import insta_person_logo from "../../images/Instagram-Person.png"

const SearchBar = (props) => {
    return (
        <div>
            <div className="instaicons">
                <i class="fab fa-instagram"></i>
                |<img src={insta_text_logo} />
            </div>
            <form className="instaform">
                <input type="submit" value="Submit" />
            </form>

            <div className="instalogo">
                <img src={compass} />
                <img src={insta_heart_logo}/>
                <img src={insta_person_logo}/>
            </div>

        </div>


    )

}


export default SearchBar;