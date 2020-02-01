import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'


function NavBar(props) {
  return (
    <div className="navbar">
    	{/*<logoBranding />*/}
    	<SearchBar value={props.value} onKeyPress={props.onKeyPress} />
    	{/*<iconTray />*/}
    </div>
  );
}

export default NavBar;