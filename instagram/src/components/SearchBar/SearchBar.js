import React from 'react';
import './SearchBar.css';



const SearchBar = (props) => {

  
const x = (event) => {
    event.preventDefault;
    // let value = e.target.value;
    // props.posts.map((post) => {return post.username === value})
   
}


    return (
        <div className="insta-header">
            <span className="header-title">
            <i class="fab fa-instagram camera"></i>
               <span className="line">|</span> Instagram
            </span>
                <form onSubmit={x}><input type="text" placeholder="Search" className="header-input"></input></form>
            <span>
                <i class="far fa-compass"></i>
                <i class="far fa-heart heart"></i>
                <i class="far fa-user user"></i>
            </span>
        </div>
    )
}


export default SearchBar;