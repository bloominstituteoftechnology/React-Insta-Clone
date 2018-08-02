import React from "react"
import './MainHeader.css'
import SearchBar from './SearchBar'

const MainHeader = () => {
    return (
      <div className = "main-header"> 
        <div className = "left-icons">
          <div className = "icons">
            <i className="fab fa-instagram" />
          </div>
          <div class="vl"></div>
          <div >
            <h2 className = "instagram"> Instagram </h2>
            {/* <img alt = "instagram logo" src = '/iglogo.png' className = "logo-image" /> */}
          </div>
        </div>
  
        <SearchBar />
      
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