import React, { Component } from 'react'
import './SearchBar.css';
import logo from './Images/logo.png';
import location from './Images/location.png';
import like from './Images/like.png';
import user from './Images/user.png';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
      };
    handleInputChange = event => {
        const input = event.target.value;
        this.setState({
          search: input
        });
        this.props.handleSearch(input);
      };
      handleLogOut = () => {
        localStorage.clear('user');
        window.location.reload();
    }
      

     render() {

        return (
        <div className="searchContainer">
            
            <div className="logo">
                <a href="#"><img src={logo} alt="insta-logo" /></a>
            </div>
            <div className="search"> 
            
                <input placeholder="Search" 
                value={this.state.search} 
                onChange={this.handleInputChange} />
                
            </div>
            
            <div className="navigation">
                <a href="#"><img src={location} alt="location" /></a>
                <a href="#"><img src={like} alt="like" /></a>
                <a href="#" onClick={this.handleLogOut}><img src={user} alt="user" /></a>
            </div>
        </div>
        
    )
}
}
 export default SearchBar; 
