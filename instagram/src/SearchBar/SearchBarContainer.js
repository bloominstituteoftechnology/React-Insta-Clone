import React, {Component} from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Navigation from './Navigation';
const SearchBarContainer = (props)=>{
    return(props.data.map((item)=>{
        return (
            <div className= 'searchbar-container'>
                <Logo 
                
                />
                <SearchBar 
                
                />
                <Navigation 
                
                />
            </div>
        )
    } 
    )
    );
    
}
export default SearchBarContainer;