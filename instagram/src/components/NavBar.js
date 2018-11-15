import React from 'react';
import SearchBar from './SearchBar/SearchBar';

function NavBar(props) {
  return (
    <div className="navbar">
    	{/*<logoBranding />*/}
    	<SearchBar />
    	{/*<iconTray />*/}
    </div>
  );
}

export default NavBar;