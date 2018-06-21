import React from 'react'
import left from './imgs/left.png'
import right from './imgs/right.png'
import {
  Heading
} from './styles/reusables.js'


const logOut = e => {
  localStorage.removeItem('user');
  window.location.reload();
}

const SearchBar = props => {
  return (
    <Heading>
      <span><img src={left} alt="logo" /></span>
      <form onChange={props.searchHandler}><input type="text" placeholder="search" /></form>
      <span><img src={right} alt="navigation options" /></span>
      <span className="logout" onClick={logOut}>Logout</span>
    </Heading>
  )
}

export default SearchBar;
