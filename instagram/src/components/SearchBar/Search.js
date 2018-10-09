import React from 'react';
import './Search.css';

const Search= props => { 
    return (
        <div className = 'searchbar'>
            <img className ='logo' src = 'https://i1.wp.com/www.vectorico.com/wp-content/uploads/2018/02/Instagram-Logo.png?resize=300%2C300&ssl=1'/>
            <img className = 'wordlogo' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'/>
            <input placeholder = 'Search'/>
        </div>
    );
}

export default Search;