import React from 'react'
import styles from './searchbar.css'

const SearchBar = () =>{
    return(
        <div className = "search-bar-container">
            <div className = "logo">
               <img src = "https://images.vexels.com//media/users/3/137201/isolated/lists/83b5f2a86fa0ec9f938664da94a9bc55-instagram-silhouette-stroke-logo.png" />
            </div>
            <div className = "search-input">
                <input 
                    type = "text"
                    placeholder = " Search..."
                />    
            </div>
            <div className = "nav-icons">   
                
            </div>


        </div>
    )
}

export default SearchBar;