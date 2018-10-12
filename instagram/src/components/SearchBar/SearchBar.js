import React from 'react';
import './SearchBar.css';

const SearchBar=(props)=>{
    return(
        <div className='searchBar'>
            <div className='logo'>
                <i className="fab fa-instagram"></i>
                <img src='http://www.stickpng.com/assets/images/5a4e432a2da5ad73df7efe7a.png' alt='Instagram logo text'/>
            </div>
            <div className='search'>
                <input type='text' value={props.searchValue} placeholder='&#x1F50D; Search' onChange={props.searchInputHandler}/>
            </div>
            <div className='buttons'>
                <i className="fas fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    )
    
}


export default SearchBar