import React from 'react';
import instacamera from '../Icons/instacamera.png'
import compass from '../Icons/compass.png';
import heart from '../Icons/heart.png';
import person from '../Icons/person.png'


const SearchBar = props => {
  return (

  <div className='fullSearchBar'>
    <div className='leftside'>
      <img src={instacamera} alt="instacamera" className="instacamera" />
      <div className="line">|</div>
      <div className="instatext">Instagram</div>    
    </div>

    <div className='searchcenter'>
      <form>
        <input 
          type="text" 
          name="searchbar"
          placeholder="search"
        />
      </form>
    </div>

    <div className="rightside">
      <img src={compass} alt="compass" />
      <img src={heart} alt="heart" />
      <img src={person} alt="person" />
    </div>
  </div>

  )
}

export default SearchBar