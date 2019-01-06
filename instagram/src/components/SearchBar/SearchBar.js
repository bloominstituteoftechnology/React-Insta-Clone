import React, { Component } from 'react';
import PropTypes from "prop-types";
import ig_icon from './instagram-icon.png';
import ig_letters from './instagram-letters.png';
import explore_icon from './explore-icon.png';
import heart_icon from '../CommentSection/ig-heart-icon-unliked.png'
import profile_icon from './profile-icon.png'
import searchbar from './search-icon.png'
import './SearchBar.css';

class SearchBar extends Component {
    constructor(){
        super();
        this.state = {
            input: "",
        }
    }
    render() {
        return(
            <div className="searchBar">
                <div className="ig-icon-div">
                    <img src={ig_icon} alt="IG icon" className="ig-icon"/>
                    <img src={ig_letters} alt="IG letters" className="ig-letters"/>
                </div>
                <div className="search-div">
                    <img src={searchbar} alt="searchbar icon" className="searchbar-icon"/>
                    <span>Search</span>
                    {/* <input
                        name="search"
                        type="text" 
                        placeholder="Search" 
                        className="search"   
                        // onChange={this.changeComment}
                        // onKeyDown={this.changeComment}
                        value={this.state.input}
                    /> */}
                </div>
                <div className="profile-div">
                    <img src={explore_icon} alt="IG icon" className="explore-icon"/>
                    <img src={heart_icon} alt="IG icon" className="heart-icon"/>
                    <img src={profile_icon} alt="IG icon" className="profile-icon"/>
                </div>  
            </div>
        )
    }
}

export default SearchBar;