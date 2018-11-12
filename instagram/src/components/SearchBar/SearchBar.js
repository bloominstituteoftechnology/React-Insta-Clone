import React from 'react';
import './SearchBar.sass';
import { Input } from 'reactstrap';
import Logo from './Logo';

const SearchBar = props => {
    return (
        <div className="search">
            <div className="search--content">
                <Logo />
                <div className="search--input">
                    <Input type="text" name="search" id="search" placeholder="Search" />
                    <span className="search--icon_magnify" />
                    <span className="search--icon_clear" />
                </div>
                <div className="search--social_icons" />
            </div>
        </div>
    );
};

export default SearchBar;
