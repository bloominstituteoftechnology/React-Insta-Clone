import React from 'react'
import Logo from './img/instagram.png'
import './SearchBar.css'

const Header = () => {
    return(
        <div className='header-container'>
            <img className='logo' src={Logo}  alt='instagram'/>
            <hr className='border'></hr>
            <h2 className='instagram'>Instagram</h2>
            <div className='search-bar-container'>
            <input className='search-bar' type='search' name='text' placeholder='search' />
            </div>
            <nav className='header-icons'>
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
            </nav>
            
            <hr className='bottom-border'></hr>
        </div>
        
    )
}

export default Header