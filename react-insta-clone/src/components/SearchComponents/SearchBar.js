import React from "react";

const SearchBar = props => {
    return (
        <div>
           <input
            //onChange={props.handleTodoChange}
            type="text"
            name="search"
            //value={props.value}
            placeholder="Search"
            /> 
        </div>
    )
}

export default SearchBar;