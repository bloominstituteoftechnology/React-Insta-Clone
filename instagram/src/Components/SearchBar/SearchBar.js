import React from 'react';
import "./searchbar.css";


const SearchBar = props => 

 (

    <div className="search-bar-container">

<div  className="logo" alt="logo">
<i className= "fab fa-instagram"></i>    <h2>Instagram</h2>
</div>

    <input className = "search" type="text" placeholder="Search..." onChange= "props.SearchBar"/>

 
 <div className="social-wrapper">
        <div className="lilpics">
          <i className="fa fa-compass" />
        </div>
        <div className="lilpics">
          <i className="fa fa-heart" />
        </div>
        <div className="lilpics">
          <i className="fa fa-user-circle" />
        </div>
      </div>
  

    

   </div>
//done


    
);


export default SearchBar;

//ISSUES
// Won't pick up on Logo (Try to adjust directories to keep things in order)