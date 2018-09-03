import React from 'react';
import PropTypes from 'prop-types';
import './searchbar.css';

import camera from '../../assets/camera.png';
import lambdagram from '../../assets/lambdagram.png';
import compass from '../../assets/compass.png';
import heart from '../../assets/heart.png';
import usericon from '../../assets/user.png';

function SearchBar(props) {
    return (
        <div className='search-bar'>
            <img src={camera} alt='Camera' />
            <div> | </div>
            <img src={lambdagram} alt='Lambdagram' />
            <input 
                name='searchInput' 
                type='text' 
                placeholder='(i) Search' 
                value={props.searchInput} 
                onChange={props.handleSearchInput} 
                onSubmit={props.handleSearch} 
            ></input>
            <img src={compass} alt='Compass' />
            <img src={heart} alt='Heart' />
            <img src={usericon} alt='User' />
        </div>
    );
}

SearchBar.propTypes = {
    searchInput: PropTypes.string.isRequired,
    handleSearchInput: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired
}

export default SearchBar;
