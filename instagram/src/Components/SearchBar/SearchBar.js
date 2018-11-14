import React from 'react';
import './SearchBar.css'

const SearchBar = (props) => {
  return (
    <div className={'search-bar'}>
      <div className={'icon-container'}>
      <img className='instagram-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Instagram_simple_icon.svg/2000px-Instagram_simple_icon.svg.png" alt='na'/>
      <img className='instagram-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' alt='na'/>
      </div>

      <div className={'search-input-container fas'}>
        <input 
          type="text" 
          className={"fas fa-search search-input"} 
          placeholder="&#xf002; Search"
          onChange={props.handleOnChange}
          value={props.inputText}
          ></input>
      </div>

      <div className={'nav-buttons'}>
        <i className="far fa-heart"></i> 
        <i className="far fa-compass"></i>
        <i className="far fa-user"></i>
      </div>
    </div>
  );
}

export default SearchBar;