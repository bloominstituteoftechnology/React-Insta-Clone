import React from 'react';
import './search-bar.css'
import MaterialIcon from 'material-icons-react'

function Search (props){
    return (
        <div className="search-block">
            <form onSubmit={props.onClick}>
            <input type="text" placeholder="🔍 Search" onChange={props.inputChange}/>
            </form>
        </div>
    )
}

export default Search