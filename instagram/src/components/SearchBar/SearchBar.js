import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div>
    SearchBar
    <form >
      <input 
      className="searchInput"
      name="search"
      type="text"
      placeholder="Search"
      // onChange={this.handleInputChange}
      />
    </form>
    
    {/* <form className="column-Layout"> // change to `row-layout`
        <input
        className="Input"
        value={this.instaClonePosts.text}
        name="search"
        type="text"
        placeholder="Search"
        onChange={this.handleInputChange}
        />
        
        <button className="btn-Search" onClick={() => this.handleAddNote()} type="button">
        Find this!
        </button>
      </form> */}
  </div>
  )
}
export default SearchBar;