import React from 'react';
import ReactDOM from 'react-dom'
import './SearchBar.css'
import dummyData from '../../dummy-data';

const SearchBar = (props) => {
    return(
        <div className="sBarDiv">
         <i className="fab fa-instagram"></i>
        <>|</>
        <img alt="" src={props.data.map(item => <div key={item.username}>item.thumbnailUrl</div>)} />
       
        <input className="searchInput" value="Search..." />
        <i className="far fa-compass"/>
        <i className="far fa-heart" />
        <i className="far fa-user"/>
        <h4>{props.LikeButton}</h4>
        </div>
    )
}

export default SearchBar 