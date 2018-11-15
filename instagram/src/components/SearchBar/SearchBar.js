import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel);

function SearchBar(props) {
  return (
    <input className="searchbar" type="text" placeholder={'\uf002 Search'}></input>
    //<input className="searchbar" type="text" placeholder={<FontAwesomeIcon icon="stroopwafel" />}></input>
  );
}

export default SearchBar;