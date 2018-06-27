import React from 'react';
import './SearchBar.css';

 const SearchBar = (props) => {
   return (
     <div>
       <span>Instagram</span>
       <form onKeyDown={props.onSearch}>
         <input type="text" placeholder="Search" name="search"/>
       </form>
       <span>Icons</span>
     </div>
   );
 }

export default SearchBar;