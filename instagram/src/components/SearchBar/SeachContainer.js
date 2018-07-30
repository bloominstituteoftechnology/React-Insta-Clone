import React from 'react';

const SearchContainer = () => {
    return ( 
        <div>

        <div className='logo'>
        <h1>INSTAGRAM</h1>
        </div>

        <div className='search'>
        <input
        type='text'
        name='search'
        placeholder='search'
        />
        </div>

        <div className='options'>
        Explore Likes Profile
        </div>

        </div>
     );
}
 
export default SearchContainer;