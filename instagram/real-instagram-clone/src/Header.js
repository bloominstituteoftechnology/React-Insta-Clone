import React from "react";
import './App.css'

const Header = ()=>{
  return(
      <div>
      <div className ="header" >
      <div className = 'insta-header'>
      <div>
        <i className="fab fa-instagram"></i>
        </div>
        <div>
            <h1 className = "header-name">Instagram</h1>
        </div>
        </div>
        <div>
        <input type="text" placeholder="Search.."></input>
        </div>
        <div className = " header-nav">
        <i class="far fa-compass"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-user"></i>
        </div>
      </div>
      </div>
  )
}
  export default Header