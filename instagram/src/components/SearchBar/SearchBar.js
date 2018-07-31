import React from 'react';
import './SearchBar.css';

const SearchBar=props=>{
    return (
        <div className='searchbar'>
        <div className='instagramTrademark'>
            <i className="fab fa-instagram fa-3x"></i>
            <div className='vr'></div>
            <img className='instalogo' src='http://assets.stickpng.com/thumbs/5a4e432a2da5ad73df7efe7a.png' alt='instagram logo'/>
        </div>    
        <div className='searchBarInput'>
            <input type='text' placeholder='Enter a username' value={props.searchValue} onChange={(e)=>{return props.handleInputChange(e)}}/>
        </div>
        <div className='searchBarIcons'>
            <i className="far fa-compass fa-3x"></i>
            <i className="far fa-heart fa-3x"></i>
            <i className="far fa-user fa-3x"></i>
        </div>
        </div>
    )
}
export default SearchBar;