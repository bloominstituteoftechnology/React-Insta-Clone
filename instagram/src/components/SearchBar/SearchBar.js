import React from 'react';
import './SearchBar.css'

function SearchBar(props) {
    return (
        <div className='search-container'> 
            <div>
                <img alt='logo' src='./SearchBar/gramhead.png'/>
                <img alt='title' src='./gramhead.png'/>
            </div>

            <form>
                <input placeholder='Search'/>
            </form>

            <div>
                <img alt='heart' src=''/>
                <img alt='location' src=''/>
                <img alt='person' src=''/>
            </div>

        </div>

    );
}

export default SearchBar; 
