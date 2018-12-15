import React from 'react';

const SearchBar = props => {
    return (
        <div className="search-bar-container">
            <div className="img-container">
                <i className="fa fa-instagram"/>
            </div>
        <div>
            <input type="text" placeholder="Search" onKeyDown={props.searchedPosts} />
        </div>
        <div className="insta-icons-container">
          <div className="insta-icon">
            <i className="fa fa-compass" />
          </div>
          <div className="insta-icon">
            <i className="fa fa-heart" />
          </div>
          <div className="insta-icon">
            <i className="fa fa-user-circle" />
          </div>
            </div>
        </div>

    )
}


export default SearchBar






