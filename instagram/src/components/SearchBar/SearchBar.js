import React from 'react';
import FeatherIcon from 'feather-icons-react';
import "./SearchBar.css";

const SearchBar = props => {
    return (
        
        <div className="search-bar">
            <div className="header">
                <FeatherIcon className="IG-logo" icon="instagram" />
                <h1 className="line-divider">|</h1>
                {/* <img src="instagram.png"></img> */}
                <h1>Instagram</h1>
            </div>
            

            
                <input className="search-box" type="text" size="30" placeholder="Search"></input>
            
            


            <div className="navigation">
                <FeatherIcon className="IG-logo" icon="compass" />
                <FeatherIcon className="IG-logo" icon="heart" />
                <FeatherIcon className="IG-logo" icon="user" />
            </div>
            
        </div>
    );
  };
  
  
  
  export default SearchBar;