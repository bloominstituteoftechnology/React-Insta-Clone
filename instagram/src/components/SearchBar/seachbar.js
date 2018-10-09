import React from 'react';
import iglogo1 from '../../img/iglogo1.png';
import instacamera from '../../img/instacamera.png';


const SearchBar = props=>{

    return(
    <div>
        <div>
        <img className= 'instacam' alt= 'instagram camera' src = {instacamera}/>
        <p>|</p>
        <img className= 'instalogo' alt= 'instagram logo' src = {iglogo1}/>
        </div>
        <input
        placeholder= 'search'>
        </input>
        
    </div>
    )
}





export default SearchBar;