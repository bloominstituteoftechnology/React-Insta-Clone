import React, { Component } from 'react'
/*import logo from '../../src/logo.svg'
import '@fortawesome/fontawesome-free/css/all.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost, faSearch } from '@fortawesome/free-solid-svg-icons'
import  '../../App.css'
library.add(faGhost, faSearch)*/

const SearchBar = (props) => {
        return(
        <div className="App">
                <header className="App-header">
                <div className="grp1">
                        <i className="fab fa-instagram item"></i>
                        <p className="fab item"> | </p>
                        <span className="cursive item">Instaclone</span>
                </div>
                <div className="grp2">                
                <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
                </div>
                <div className="grp3">
                        {/*<FontAwesomeIcon icon="search" className="fab" />*/}
                </div>
                
                </header>
        </div>
        )
}

export default SearchBar;