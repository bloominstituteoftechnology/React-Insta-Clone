import React from 'react';
import UserMenu from './UserMenu';
import SearchInput from './SearchInput';
import Images from './Images'
import './searchbar.css'

function HeaderContainer(props) {
    return <div className="header">
            <Images />
            <SearchInput handleInput={props.handleInput}/>
            <UserMenu />
            </div>
}

export default HeaderContainer;