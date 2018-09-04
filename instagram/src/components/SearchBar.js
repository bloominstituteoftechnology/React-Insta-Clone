import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className = 'searchBarMain'>
            <div className ='logoName'>
                <img className = 'instaLogo' src='1200px-Instagram_logo.svg.png' alt='Instagram Logo'/>
                {/* <div className = 'vl'/> */}
                {/* </div> */}
                <h1 className = 'instaName'>Instagram</h1>
            </div>
            <div className = 'searchField'>
                <input className = 'topInput' type='text' placeholder="Search"/>
            </div>
            <div className = 'socialIcons'>
                <img src='#' className='compass' alt='compass'/>
                <img src='#' className='heart' alt='heart'/>
                <img src='#' className='person' alt='person'/>
            </div>
        </div>

    );
};

export default SearchBar;