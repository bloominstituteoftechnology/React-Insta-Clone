import './Search.css'
import SearchBar  from '../SearchBar/SearchBar'
import React from 'react'

const ClearUser=(e)=>{
  
  window.localStorage.removeItem('user');
  window.location.reload();
};

export default function SearchBarContainer(props) {
  console.log( props)
  return (
    <div className="SearchBarContainer">
      <SearchBar searchfn ={props.searchfn} />
      <button onClick={ClearUser}>Logout</button>
    </div>
  )
}
