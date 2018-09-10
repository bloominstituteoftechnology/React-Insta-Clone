import React from 'react';
import './SearchBar.css';
const SearchBar = () => {
return (
        <div className='main'>
            <div className='left'>
                <img className='cam' src={require('./cam.jpg')} />
                <img className='inst' src={require('./inst.png')} />
            </div>
            <div className='center'>
                <input type='text' value='Search' />
            </div>
            <div className='right'>
                <img src={require('./c.png')} />
                <img src={require('./h.png')} />
                <img src={require('./p.png')} />
            </div>
        </div>
    );
};





export default SearchBar;