import React from 'react';
import './searchbar.css';


const SearchBar = props => {
    return (
        <div className= 'main-header'>
            <div id= 'left-icons'>
                <i className="fab fa-instagram"></i>
                <p>|</p>
                <h1 id= 'instagram'>Instagram</h1>
            </div>
            <form className= 'search-form' onSubmit={props.search}>
                <input 
                    value={props.term}
                    onChange= {props.handleSearchChange} 
                    className= 'search'  
                    placeholder= '⚲ Search'
                    type="text">
                    </input>
            </form>            
            <div id= 'right-icons'>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    );
}

export default SearchBar;