import React, { Component } from 'react';

class SearchBar extends Component {
    
    render() { 
        return ( 
            <div className="search-bar">
                <div className="logo"><img src="" alt="logo" /></div>
                <input 
                    type="text"
                    placeholder="Search"
                    //value
                    //onChange
                />
                <div><img src="" alt="compass" /></div>
                <div><img src="" alt="heart" /></div>
                <div><img src="" alt="account" /></div>
            </div>
         );
    }
}
 
export default SearchBar;