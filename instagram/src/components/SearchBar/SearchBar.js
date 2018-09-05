import React from 'react'


const SearchBar = (props) => {
  return (
    <div className='search-bar'>
      <img className='logo' src="#" />
      <img className='title' src="#" />
      <form onSubmit={props.filterEntries}>
        <label>
          Search
          <input type="text" name="name"
          value={props.value}
          onChange={props.updateFilter}
        />
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
