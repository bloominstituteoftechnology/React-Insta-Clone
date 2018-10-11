import React from 'react';
import ReactDOM from 'react-dom'
import './SearchBar.css'
import dummyData from '../../dummy-data';

const SearchBar = (props) => {
    return(
        <div className="sBarDiv">
        <i class="fab fa-instagram"></i>

        <img alt="" src={props.data.map(item => <div key={item.username}>item.thumbnailUrl</div>)} />
        <i className="fas fa-compass"/>
        <i className="fas fa-heart" />
        <i className="fas fa-user-circle" />
        <h4>{props.LikeButton}</h4>
        </div>
    )
}

export default SearchBar 