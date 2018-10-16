import React from 'react'

const SearchBar = props => {
  return (
  <div className='fullSearchBar'>
    <div className='leftside'>
      <img src="./icons/instacamera" alt="instacamera" />
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
      <img src="./icons/compass" alt="compass" />
      <img src="./icons/heart" alt="heart" />
      <img src="./icons/person" alt="person" />
    </div>
  </div>

  )
}

export default SearchBar