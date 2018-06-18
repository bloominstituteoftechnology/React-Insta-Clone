import React from 'react'
import './SearchBar.css'

const SearchBar = () => (
    <div className="search-bar">
        <div className="logo-container">Instagram</div>
        <div className="search-field-container">
            <form>
                <input type="text" placeholder="Search"></input>
                <div className="search-button"></div>
            </form>
        </div>
        <div className="activity-container">
            <div className="activity discover">discover</div>
            <div className="activity notifications">notifications</div>
            <div className="activity user-profile">user profile</div>
        </div>
    </div>
)

export default SearchBar