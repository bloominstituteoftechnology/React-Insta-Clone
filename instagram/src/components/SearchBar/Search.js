import React, {Component} from 'react';
import './Search.css';

const Search = () => {
   
    return (
        <div className="instagram-header">  
        <img />      
        <span className="header-title">
            instagram </span>     
            <input name="name" type="text" onSubmit={this.handSubmit} placeholder="Search"/>
            <img />
            <img />
        </div>
    )
 
}

export default Search;