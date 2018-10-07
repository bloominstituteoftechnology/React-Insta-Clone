import React from 'react';
import Icons from './Icons';
import Logo from './Logo';
import Search from './Search';
import './SearchBar.css';

const SearchBar = props =>  <header>
                                <Logo />
                                <Search />
                                <Icons />
                            </header>

export default SearchBar;