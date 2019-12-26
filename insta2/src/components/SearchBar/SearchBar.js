import React from 'react';

import './searchBar.css';

const SearchBar = props => {
    return (
        <div className="searchBar">
            <div className="logos">
                <img className="logo1" src="https://i.imgur.com/YllXrog.png" alt="logo" />
                <img src="https://i.imgur.com/2cwCthG.png" alt="logo" />
            </div>
            <div className="form">
                <form>
                    <input type="text" />
                </form>
            </div>
            <div className="searchIcons">
                <i className="fa fa-compass"></i>
                <i className="fa fa-heart"></i>
                <i className="fa fa-user"></i>
            </div>
        </div>
    );
}

export default SearchBar;