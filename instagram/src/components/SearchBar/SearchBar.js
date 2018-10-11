import React from 'react'
import CameraIcon from '../Icons/CameraIcon'
import CompassIcon from '../Icons/CompassIcon'
import HeartIcon from '../Icons/HeartIcon'
import SearchIcon from '../Icons/SearchIcon'
import UserIcon from '../Icons/UserIcon'
import LogoType from '../Icons/LogoType'

import PropTypes from 'prop-types'
import './SearchBar.css'


const SearchBar = props => {
  return (
    <div className='search-bar'>
        <div className='logo'>
          <CameraIcon />
          <LogoType />
        </div>
        <div className='search-field'>
          <SearchIcon />
          <input type='text' name='search' value={props.input} onChange={props.handleSearch} placeholder='Search' />

        </div>


      <div className='icons'>
        <CompassIcon />
        <HeartIcon />
        <UserIcon />
      </div>

      </div>

  )
}

SearchBar.propTypes = {
  value: PropTypes.string
}

export default SearchBar;
