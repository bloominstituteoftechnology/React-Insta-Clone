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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Xw9NW2MQjJYFIc8VgcIJAl_vj06S1L4SXVmIGOGETY1sONUw" className="header-img" alt="safari"/>
                <img src="https://cdn4.iconfinder.com/data/icons/pyconic-icons-1-2/512/heart-outline-512.png" className="header-img" alt="heart" />
                <img src="https://tutorials.youphptube.com/view/img/userSilhouette.jpg" className="header-img" alt="user" />
            </div>
        </div>
    )
}

export default Search;