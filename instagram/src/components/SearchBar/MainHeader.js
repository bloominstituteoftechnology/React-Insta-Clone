import React from "react"
import './MainHeader.css'

const MainHeader = props => {
    return (
      <div className = "main-header"> 
        <div className = "left-icons">
          <div className="fab fa-instagram"></div>
          <div class="vl"></div>
          <div className = "instagram">
            <h2> Instagram</h2>
          </div>
        </div>
  
         <div className = "search-field">
        <input type = "search" placeholder = "search"/>
        </div>
      
        <div className = "right-icons">
          <div className = "icons"> 
            <i className="fa fa-compass" />
          </div>
          <div className = "icons"> 
            <i className="fa fa-heart" />
          </div>
          <div className = "icons"> 
            <i className="fa fa-user-circle" />
          </div>
        </div>
      </div> 
  
    )
  }

  export default MainHeader