import React from 'react';
import './search-bar.css'
import MaterialIcon from 'material-icons-react'

function Search (props){
    return (
        <div className="search-block">
            <input type="text" placeholder="🔍 Search"/>
        </div>
    )
}

export default Search