import React, { Component } from 'react';
import './SearchBar.css';
import logo from './insta-logo.png'

class SearchBar extends React.Component {
    render () {
        return (
            <div className='SearchBar'>
                <div className='left-corner'>
                    <i className='fab fa-instagram fa-2x'></i>
                    <div className='vertical-line'></div>
                    <img src={logo} alt='Instagram logo' className='logo'/> 
                </div>
                <form>
                    <input className='search-bar' type='text' placeholder='Search'></input>
                </form>
                <div className='right-corner'>
                    <i className="far fa-compass fa-2x"></i>
                    <i className="far fa-heart fa-2x"></i>
                    <i className="far fa-user fa-2x"></i>
                </div>
            </div>
        )
    }
}

export default SearchBar;