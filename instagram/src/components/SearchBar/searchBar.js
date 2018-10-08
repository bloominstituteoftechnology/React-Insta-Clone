import React from 'react';

//Initiate component
const searchBar = props => {
    return (
        <input type="text" name="temp" onChange={props.inputHandler} className="searchForm" placeholder="search..." value={props.temp}/>
    )
};

//Create input form

//Export
export default searchBar;