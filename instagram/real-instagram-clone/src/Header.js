import React from "react";
import "./App.css";

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <div className="header">
        <div className="insta-header">
          <div>
            <i className="fab fa-instagram" />
          </div>
          <div>
            <h1 className="header-name">Instagram</h1>
          </div>
        </div>
        <div>
          <input  name= 'search' value = {props.search} onChange={props.handleChanges} type="text" placeholder="Search....." />
        </div>
        <div className=" header-nav">
          <i class="far fa-compass" />
          <i class="far fa-heart" />
          <i class="far fa-user" />
        </div>
      </div>
    </div>
    
  );
};
export default Header;
