import React, {Component} from 'react';
import './searchBar.css';

class  SearchBar extends Component  {
   render(){
    return (
        <div className="Searchbar">
          <div  >
           <input type="text"  placeholder="Enter your Profile" name=""  className="Input"/>
         </div>
       </div>
    )
}
}
export default SearchBar;