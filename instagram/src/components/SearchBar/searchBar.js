import React from 'react';
import './searchBar.css';
import logo from './instagramLogo.PNG'
import links from './instagramSearchBarLinks.PNG'

const SearchBar = props => {
    return (
        <div className='searchBarDiv'>
            <img className='instaLogo' src={logo} alt='instagram logo' />
            <form>
                <input className='searchField' type='text' value={props.username} placeholder='username' ></input>
            </form>
            <img className='instaLinks' src={links} alt='instagram links' />


        </div>
    )
}

export default SearchBar;