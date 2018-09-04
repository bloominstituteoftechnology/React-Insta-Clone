import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className="SearchBar">
            <div className="LogoBand">
                <p>Icon l Instagram</p>
            </div>

            <div className="Search">
                <input type="text" placeholder="Search" />
            </div>

            <div className="Navigation">
                <i className="Explore">explore</i>
                <i className="Like">like</i>
                <i className="User">user</i>
            </div>
        </div>
    )   
}

export default SearchBar