import React from 'react'
 import './SearchBar.css'
const SearchBar = () =>{
    return (

        <div className = 'Search'> 
            <h1>Instagram</h1>  
       <form>
           <input type= 'text' placeholder='search'></input>
       </form>
        </div>
    )
}


export default SearchBar

