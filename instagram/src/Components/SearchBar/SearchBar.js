import React from 'react';
import { Sprite, SpriteCore } from '../../Style';
import './SearchBar.css';


const SearchBar = ({searchPost, value, logout}) => {
    return (
        <div className="searchbar-container">
            <div className="container">
                <div className="searchbar-logo">
                    <Sprite smallLogo/>
                    <div className="split"></div>
                    <Sprite logoText />
                </div>
                <div className="searchbar-input">
                    <input type="text" placeholder="Search" name="search" value={value} onChange={searchPost}/>
                </div>
                <div className="searchbar-icons">
                    <SpriteCore navigate />
                    <SpriteCore heart />
                    <SpriteCore user onClick={logout} />
                </div>
            </div>
        </div>
    );
}



export default SearchBar;
