import React from 'react';
import Icon from './Icon';
import './searchbar.css';

const SearchBarContainer = () => (
    <div className='searchbar-container'>
        <div className='inside-left-searchbar'> 
            <Icon icon={< i className="fab fa-instagram fa-2x instagram-icon" > </i>}/>
            <div className="logo">Instagram</div>
        </div>
        <div> <input type='text' className='search-input' placeholder={' Search'} /> </div>
       
        <div className='inside-right-searchbar'>
            <Icon icon={<i className="far fa-compass right-icons"></i>} /> 
            <Icon icon={<i className="far fa-heart right-icons"></i>} /> 
            <Icon icon={<i className="far fa-user right-icons"></i>} /> 
            
        </div>
    </div>
);

export default SearchBarContainer;
