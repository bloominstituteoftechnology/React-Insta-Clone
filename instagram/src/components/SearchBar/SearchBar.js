import React from 'react';
import Icons from './Icons';
import Logo from './Logo';
import Search from './Search';
import './SearchBar.css';
import PropTypes from 'prop-types';

const SearchBar = props =>  <header>
                                <Logo />
                                <Search value={props.value} searchInputHandler={props.searchInputHandler} />
                                <Icons />
                            </header>

SearchBar.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    searchInputHandler: PropTypes.func.isRequired
}

export default SearchBar;