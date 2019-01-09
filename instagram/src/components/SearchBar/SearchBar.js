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

    /*
        To filter out by username:
        create an array with usename from dummyDta
        compare the input from search bar to the array
    */

    // setUsernamesArray = () => {
    //     // let newArray = this.state.data.map(username => {
    //     //     return username.username
    //     // })
    //     // this.setState({
    //     //     usernames: state.data.map(username =>{
    //     //         return username.username
    //     //     })
    //     // })
    //     this.state.data.map(username =>{
    //         console.log("username:username: ",username.username)
    //         return username.username
    //     })
    //     console.log("usernames: newArray", this.state.usernames)
    // }

    searchInput = (event) => {
        console.log("input: ", this.state.input)
        this.setState({
            input: event.target.value,
        })
        console.log("input after setState: ", this.state.input)
        for(let i =0; i< (this.props.data).length; i++){
            if((this.props.data[i].username).includes(this.state.input) ){
                console.log("match")
            }
            
        }
        
    }

    render() {
        // console.log("usernames: ", (this.props.data).length)
        return(
            <div className="searchBar">
                <div className="ig-icon-div">
                    <img src={ig_icon} alt="IG icon" className="ig-icon"/>
                    <img src={ig_letters} alt="IG letters" className="ig-letters"/>
                </div>
                <div className="search-div">
                    <img src={searchbar} alt="searchbar icon" className="searchbar-icon"/>
                    <input
                        name="search"
                        type="text" 
                        placeholder="Search" 
                        className="search"   
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