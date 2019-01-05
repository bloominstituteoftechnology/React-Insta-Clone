import React, { Component } from 'react';
import PropTypes from "prop-types";
import searchbar from './ig_search_bar.png';
import ig_icon from './instagram-icon.png';
import ig_letters from './instagram-letters.png';
import explore_icon from './explore-icon.png';
import heart from '../CommentSection/ig-heart-icon-unliked.png'
import profile from './profile-icon.png'
import './SearchBar.css';

class SearchBar extends Component {
    render() {
        return(
            <div className="searchBar">
                <div className="ig-icon-div">
                    <img src={ig_icon} alt="IG icon" className="ig-icon"/>
                    <img src={ig_letters} alt="IG letters" className="ig-letters"/>
                </div>
                {/* <img src={searchbar} alt="searchbar" /> */}
            </div>
        )
    }
}

export default SearchBar;