import React from 'react';

const SearchBar=()=>{
    return (
        <div className='searchbar'>
            <i class="fab fa-instagram"></i>
            <img src='http://assets.stickpng.com/thumbs/5a4e432a2da5ad73df7efe7a.png' alt='instagram logo'/>
            <input type='text' placeholder='Search'/>
            <i class="far fa-compass"></i>
            <i class="far fa-heart"></i>
            <i class="far fa-user"></i>
        </div>
    )
}
export default SearchBar;