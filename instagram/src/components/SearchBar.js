import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className = 'searchBarMain'>
            <div className ='logoName'>
                <img className = 'instaLogo' src='#'/>
                <h1 className = 'instaName'>props.Insta</h1>
            </div>
            <div className = 'searchField'>
                <input className = 'topInput' type='text' placeholder="Search"></input>
            </div>
            <div className = 'socialIcons'>
                <img src='#' className='compass' alt='compass'/>
                <img src='#' className='compass' alt='heart'/>
                <img src='#' className='compass' alt='person'/>
            </div>
        </div>

    );
};

export default SearchBar;