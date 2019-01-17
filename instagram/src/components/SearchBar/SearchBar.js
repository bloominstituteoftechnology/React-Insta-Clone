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
    constructor(props){
        super(props);
        this.state = {
            input: "",
            data: props,
            usernames: [],
        }
    }

    searchInput = (event) => {
        console.log("input: ", this.state.input)
        this.setState({
            input: event.target.value,
        })
        console.log("input after setState: ", this.state.input)

        // const result = (this.props.data).filter(
        //                 data.username => data.username.includes(this.state.input))
        // console.log(result)
        
    }

    render() {
        // console.log("usernames: ", (this.props.data).length)
        return(
            <div className="searchBar">
                <div className="wrapped-ig">
                    <a href="" className="ig-icon-a">
                        <div className="ig-icon-div">
                            <img src={ig_icon} alt="IG icon" className="ig-icon"/>
                            <img src={ig_letters} alt="IG letters" className="ig-letters"/>
                        </div>
                    </a>
                </div>
                
                <div className="search-div">
                    <img src={searchbar} alt="searchbar icon" className="searchbar-icon"/>
                    <input
                        name="search"
                        type="text" 
                        placeholder="Search" 
                        className="input-search"   
                        onChange={this.searchInput}
                        // onKeyDown={this.changeComment}
                        value={this.state.input}
                    />
                </div>

                <div className="profile-div">
                    <img src={explore_icon} alt="explore icon" className="explore-icon"/>
                    <img src={heart_icon} alt="heart icon" className="heart-icon"/>
                    <img src={profile_icon} alt="profile icon" className="profile-icon"/>
                </div>  
            </div>
        )
    }
}

export default SearchBar;