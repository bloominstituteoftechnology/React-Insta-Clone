import React, { Component } from 'react';
import "./index.css";







class SearchBar extends Component {
    constructor(){
        super();
        this.state = {
            searchTerm: "Search",
            update: "",

        }
    }
    
    
    render (){
        return (
            <div>
                SearchBar
            </div>
        );
    }
}

export default SearchBar;