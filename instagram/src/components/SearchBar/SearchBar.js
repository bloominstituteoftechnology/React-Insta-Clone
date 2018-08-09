import React from "react";
import ig_search_bar from "../accessible-assets/ig_search_bar.png";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div>
      <div>
        <img alt='instagram logo' src='ig_search_bar.png' />
      </div>
      <div>
        <input type='text' placeholder='Search' onKeyDown={props.searchPosts} />
      </div>
      <div>
        <div>
          <i className='far fa-compass' />
        </div>
        <div>
          <i className='far fa-heart' />
        </div>
        <div>
          <i className='far fa-user-circle' />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;