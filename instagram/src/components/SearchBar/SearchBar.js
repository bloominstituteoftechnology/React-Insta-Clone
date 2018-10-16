import React from 'react'

const SearchBar = props => {
  return (
  <div className='fullSearchBar'>
    <div className='leftside'>
      <div>@</div>
      <div>|</div>
      <div>Instagram</div>    
    </div>

    <div className='searchcenter'>
      <div>
        <input 
          type="text" 
          name="searchbar"
          placeholder="search"
        />
      </div>
    </div>

    <div className="rightside">
      <div>@</div>
      <div>@</div>
      <div>@</div>
    </div>
  </div>

  )
}

export default SearchBar