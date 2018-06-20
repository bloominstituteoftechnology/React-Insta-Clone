import React from 'react'
import left from './imgs/left.png'
import right from './imgs/right.png'

const logOut = e => {
  localStorage.removeItem('user');
  window.location.reload();
}

const SearchBar = props => {
  return (
    <div className="header">
      <span><img src={left} alt="logo" /></span>
      <form onChange={props.searchHandler}><input type="text" placeholder="search" /></form>
      <span><img src={right} alt="navigation options" /></span>
      <span className="logout" onClick={logOut}>Logout</span>
    </div>
  )
}

export default SearchBar;
