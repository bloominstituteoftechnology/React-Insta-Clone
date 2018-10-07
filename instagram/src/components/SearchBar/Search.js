import React from 'react';

export default (props) => <input className="search" type="text" placeholder="&#x1F50D; Search" onChange={props.searchInputHandler} value={props.value}></input>