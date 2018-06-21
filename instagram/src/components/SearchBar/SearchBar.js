import React from 'react';
import {SearchDiv} from '../Styles/SearchStyles';
import './SearchBar.css'

const SearchBar = props => {
    return (
        <SearchDiv className="search-bar">
            <div className="icon-logo">
                <i className="fab fa-instagram"></i>
                <p>|</p>
                <img className="logo" src={require('../../img/logo.png')} alt="Instagram" />
            </div>
            <form>
                <input type="text" placeholder="Search" onChange={props.searchPosts} />
            </form>
            <div className="social-icons">
                <div className="icon">
                    <i className="fa fa-compass"></i>
                </div>
                <div className="icon">
                    <i className="fa fa-heart"></i>
                </div>
                <div className="icon" onClick={props.logout}>
                    <i className="fa fa-user-circle"></i>
                </div>
            </div>
        </SearchDiv>
    )
}

export default SearchBar;