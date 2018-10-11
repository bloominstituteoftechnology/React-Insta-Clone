import React from 'react';
import ReactDOM from 'react-dom'
import './SearchBar.css'
import dummyData from '../../dummy-data';

const SearchBar = (props) => {
    return(
        <div className="sBarDiv">
        <img alt="" src={props.data.map(item => <div key={item.username}>item.thumbnailUrl</div>)} />
        <h4>{props.LikeButton}</h4>
        </div>
    )
}

export default SearchBar 