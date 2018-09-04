import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';

const HeaderContainer = () => {
    return ( 
        <div class='header-container'>
            <Logo />
            <Search />
            <Menu />
            </div>
     );
}
 
export default HeaderContainer;