import React from 'react';
import FeatherIcon from 'feather-icons-react';
import "./SearchBar.css";

const SearchBar = props => {
    return (
        
        <div className="search-bar">
            <div className="header">
                <FeatherIcon className="IG-logo" icon="instagram" />
                <h1>Instagram</h1>
            </div>
            

            <div className="search">
                <input type="text" placeholder="Search"></input>
            </div>
            


            <div className="navigation">
                <FeatherIcon className="IG-logo" icon="compass" />
                <FeatherIcon className="IG-logo" icon="heart" />
                <FeatherIcon className="IG-logo" icon="user" />
            </div>
            
        </div>
    );
  };
  
  
  
  export default SearchBar;