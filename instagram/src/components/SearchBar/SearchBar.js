import React, { Component } from 'react';
import './SearchBar.css';


class SearchBar extends Component {
    
    render() { 
        return ( 
            <div className="search-bar">
                <div className="logo">
                <img src="https://www.juut.com/wp-content/uploads/2016/02/instagram.png" alt="logo" />
                </div>

                <input 
                    type="text"
                    placeholder="Search"
                    //value
                    //onChange
                />
            <div className="icons">
                <div><i class="far fa-compass fa-5x"></i></div>
                <div><i class="far fa-heart fa-5x"></i></div>
                <div><i class="far fa-user fa-5x"></i></div>
            </div>    
            </div>
         );
    }
}
 
export default SearchBar;