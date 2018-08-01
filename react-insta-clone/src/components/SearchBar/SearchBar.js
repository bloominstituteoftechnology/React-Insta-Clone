import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
    console.log('imProps', props)
    return (
        <div className='searchContainer'>
            <div className='logoLeft'>
                logo
            </div>
            <div className='input'>
               <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
            </div>
            <div className='logoRight'>
                logo
            </div>
        </div>
    );
};

export default SearchBar;