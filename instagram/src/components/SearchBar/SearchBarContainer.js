import React from 'react';
import './SearchBar.css'


//anonymous function changed to prop, added props and function to input
const SearchBar = props=> {
    return (
        <div className="search-bar-wrap">
          <div className="img-wrap">
            <i className="fa fa-instagram" />
            </div>
          <div>
            <input type ="text" placeholder="Search" onChange={props.searchedPosts} />
            </div>
          <div className="social-icons-wrapper">
          <div className="social-icon">
            <i className="fa fa-compass" />
          </div>
          <div className="social-icon">
            <i className="fa fa-heart" />
          </div>
          <div className="social-icon">
            <i className="fa fa-user-circle" />
          </div>
            </div>
        </div>
    )
}


export default SearchBar;