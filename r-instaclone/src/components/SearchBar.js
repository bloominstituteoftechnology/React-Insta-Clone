import React from 'react';

function SearchBar(props) {
    return (

    <div className = "instaHeader">
    
    <div className = "instaLogo">
    <i class="fab fa-instagram"></i>

    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" width="100"  alt="instagram-name"></img>
    
    </div>
    {/* instaheader div */}

    <i class="far fa-compass"></i>
    <i class="far fa-heart"></i>
    <i class="far fa-user"></i>

    
    <div className = "SearchBar">
    
    <form>
    <input type="text" placeholder="Search.." name="search" autoComplete="off"></input>
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>

    </div>
    {/* ^SearchBar end div */}
    
    
    </div> //main div 

    )}

    export default SearchBar;


    // class SearchBar