import React from "react"
import "./SearchBar.css"

const SearchBar = props => {
    return (
        <div className= "header">
        <h1>Instagram (clone)</h1>
        <input placeholder="Search" onKeyDown={props.searchPosts} />
        </div>
    )
}

export default SearchBar