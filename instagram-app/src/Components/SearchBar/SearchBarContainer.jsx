import './Search.css'
import SearchBar  from '../SearchBar/SearchBar'
import React from 'react'

export default function SearchBarContainer(props) {
  console.log( props)
  return (
    <div className="SearchBarContainer">
      <SearchBar searchfn ={props.searchfn} />
    </div>
  )
}
