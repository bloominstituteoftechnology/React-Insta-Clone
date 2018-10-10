import React from 'react';
import './SearchBar.css';

const SearchBar = props => {

    return(
    
        <div className='searchBar'>
            <div className='instaLogo'>
                <img src='data:image/png;base64,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' alt="instagram Icon" ></img>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' alt="instagram Icon" ></img>
            </div>
         
            <input type="text" name="search" value={props.search} 
                onChange={props.onInputChange} placeholder="Search"/>
           
            <div className='icons'>
                <i class="far fa-compass"></i>
                <i className="far fa-heart" ></i>
    
                <i class="far fa-user"></i>
             </div>
        </div>

    );
}



export default SearchBar;