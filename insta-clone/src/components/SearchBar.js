import React from 'react';
import insta from '../images/instagram.png';

const SearchBar = (props)=> {
    return( 
        <div className="searchbar">
            <div className="instaDiv">
                <i className="fab fa-instagram fa-3x"></i>
                <img className="insta" src={insta} alt="insta" />
            </div>
            <div>
                <input onChange={props.searchPosts} type="text" placeholder="Search" />
            </div>
            <div>
                <i className="far fa-compass fa-2x"></i>
                <i className="far fa-heart fa-2x"></i>
                <i className="far fa-user fa-2x"></i>
            </div>
        </div>
    )
}


export default SearchBar;