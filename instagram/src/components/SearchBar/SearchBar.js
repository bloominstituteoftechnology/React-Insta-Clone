import React from 'react';
import instacamera from '../Icons/instacamera.png'
import compass from '../Icons/compass.png';
import heart from '../Icons/heart.png';
import person from '../Icons/person.png'


const SearchBar = props => {
  return (

  <div className='search'>
    <div className='leftside'>
      <img src={instacamera} alt="instacamera" className="instacamera" />
      <div className="line">|</div>
      <div className="instatext">Instagram</div>    
    </div>

    <form >
      <input 
        type="text" 
        name="searchbar"
        placeholder="Search"
        className="searchinput"
      />
    </form>

    <div className="rightside">
      <img src={compass} alt="compass" className="compass"/>
      <img src={heart} alt="heart" className="heart"/>
      <img src={person} alt="person" className="person"/>
    </div>
    
  </div>

  )
}

export default SearchBar