import React, { Component } from 'react';
import './SearchBar.css';
import logo from './insta-logo.png'

class SearchBar extends React.Component {
    render () {
        return (
            // upper left corner with instagram logos
            <div className='SearchBar'>
                <div className='left-corner'>
                    <i className='fab fa-instagram fa-2x'></i>
                    <div className='vertical-line'></div>
                    <img src={logo} alt='Instagram logo' className='logo'/> 
                </div>
                {/* search bar */}
                <form onSubmit={this.props.onSubmit}>
                    <input 
                        className='search-bar' 
                        type='text' 
                        placeholder='Search'
                        value={this.props.value}
                        onChange={this.props.onChange}
                    >
                    </input>
                </form>
                {/* upper right corner with compass, heart, user icons */}
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