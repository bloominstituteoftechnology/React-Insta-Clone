import React from 'react'

const SearchBar = props => {
  return (
  <div className='fullSearchBar'>
    <div className='leftside'>
      <div>@</div>
      <div>|</div>
      <div>Instagram</div>    
    </div>

    <div className='search=center'>
      <div>
        <input 
          type="text" 
          name="searchbar"
          placeholder="search"
        />
      </div>
    </div>

    <div>
      <div>@</div>
      <div>@</div>
      <div>@</div>
    </div>
  </div>

  )
}

export default SearchBar