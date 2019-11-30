import React from 'react'
import './Header.css'

const Header = (props) => {
    const handleChange = (e) => {
        let value = e.target.value
        window.location.href = value
    }
    return (
        <div className="header__container">
            <div className="header-logo">
                <i className="fab fa-instagram"></i>
            <h1 className="header-logo--text">Instagram</h1>
            </div>
            <input className="search" type="search" placeholder="search" onChange={props.handleChange}/>
            <div className="header-icons">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user">
                    <select onChange={handleChange} className="user-select">
                    <option className="user-logout" name="logout" value="/home">user</option>
                    <option className="user-logout" name="logout" value="/">logout</option>
                    </select>
                </i>
            </div>
        </div>
    )
}

export default Header