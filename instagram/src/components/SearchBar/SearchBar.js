import React from 'react'


const SearchBar = () => {
  return (
    <div className='search-bar'>
      <img className='logo' src="#" />
      <img className='title' src="#" />
      <form>
        <label>
          Search
          <input type="text" name="name" />
        </label>
        {/* <input type="submit" value="Submit" /> */}
      </form>
      <div className='options'>
        <img className='search' src="#" />
        <img className='favorites' src="#" />
        <img className='profile' src="#" />
      </div>
    </div>
  )
}




export default SearchBar
