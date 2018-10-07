import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div>
{/* ☞ 8f646e2b-8849-477c-a200-080dd79c22a9 */}
    <form >
    {/* <label>
      Search Bar:   
      </label> */}
      <input 
      className="searchInput"
      name="search"
      type="text"
      placeholder="Search"
      // onChange={this.handleInputChange}
      />
      <input type="submit" value="Find this!" />
    </form>
    {/* <label>New Task: 
    <input type="text" name="newTask" placeholder="Enter new task"/>
    <input type="text" name="newTaskContent" placeholder="Enter task description"/>
    </label>
  <input type="submit" value="Add this task" /> */}
    
  </div>
  )
}
export default SearchBar;