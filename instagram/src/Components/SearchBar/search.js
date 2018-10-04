import React from "react";
import "./search.css"

const Search = props =>{
    return (
        <div className="app-header">
            <div className="left">
                <img src="https://tcnjathletics.com/common/controls/image_handler.aspx?thumb_id=0&image_path=/images/2017/9/11/glyph_logo_May2016.png" className="header-img" alt="camera"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" className="header-img vertical-line" alt="insta"/>
            </div>

            <div className="middle">
                <input className="search-box" placeholder="search"></input>
            </div>

            <div className="right">
                <i class="far fa-compass fa-2x"></i>
                <i class="far fa-heart fa-2x"></i>
                <i class="fas fa-user fa-2x"></i>
            </div>
        </div>
    )
}

export default Search;