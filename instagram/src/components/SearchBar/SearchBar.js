import React from 'react';
import css from './SearchBar.css';
const SearchBar = (props) =>{
    return(
        <div className="search">
        <div className='logos'>
        <i className="fab fa-instagram fa-2x" ></i>
           <p>|</p>
            <img src ="https://vignette.wikia.nocookie.net/logopedia/images/a/aa/Instagram_wordmark.svg/revision/latest?cb=20140110161419" alt ="Instagram"/>
        </div>
           <form className='searchbar'> <input placeholder='&#x1F50D; Search'></input></form>
            <div className='icons'>
            <i className="far fa-compass fa-1.5x"></i> 
            <i className="far fa-heart fa-1.5x"></i> 
            <i className="far fa-user fa-1.5x"></i>
            </div>
        </div>
    
        
    )
}

export default SearchBar