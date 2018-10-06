import React from 'react';
import ReactDOM from 'react-dom'
import './SearchBar.css'
import dummyData from '../../dummy-data';

const SearchBar = props => {
   let textInput = (props) => {
    props.inputText()
    // typerror: props.inputText is ! a func
    }
    // try calling the inputText function on it's own again
    return(

<div className="sBarDiv">
<img alt="*" src={dummyData.map(item =>{

   return item.imageUrl
})}/>
<h4>{props.text}</h4>
{/* this could be a kink in the event chain if it's not recieving props prop-erly */}
<input onChange={textInput}/>
{/* maybe onChange isnt the best choice */}
{/* if we add a search button and an onClick we can interpolat0e code from the todo list with ease */}
</div> )
}

export default SearchBar 