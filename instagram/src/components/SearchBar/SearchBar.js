import React, { Component } from 'react';

class SearchBar extends Component {
    
    render() { 
        return ( 
            <div className="search-bar">
                <input 
                    type="text"
                    placeholder="Search"
                    //value
                    //onChange
                />
            </div>
         );
    }
}
 
export default SearchBar;