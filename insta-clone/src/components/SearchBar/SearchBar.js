import React from "react"
import "./SearchBar.css"

const SearchBar = props => {
    return (
        <div className= "header">
        <h1>Instagram (clone)</h1>
        <form>
            <input value="Search"></input>
        </form>
        </div>
    )
}

export default SearchBar