import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="header__container">
            <div className="header-logo">
                <i className="fab fa-instagram"></i>
            <h1 className="header-logo--text">Instagram</h1>
            </div>
            <input className="search" type="search" placeholder="search"/>
            <div className="header-icons">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    )
}

export default Header