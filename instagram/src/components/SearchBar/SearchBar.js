import React, { Component } from 'react'
import logo from '../../logo.svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost, faSearch } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-free/css/all.css'
import  '../../App.css'
library.add(faGhost, faSearch)

const SearchBar = (props) => {
        return(
        <div className="App">
                <header className="App-header">
                        <i className="fab fa-instagram"></i>
                        <input></input>
                        <FontAwesomeIcon icon="ghost" /> 
                        <FontAwesomeIcon icon="search" />
                
                </header>
        </div>
        )
}

export default SearchBar;