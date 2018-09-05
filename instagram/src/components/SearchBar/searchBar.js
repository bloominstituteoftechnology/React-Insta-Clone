import React from 'react';
import './SearchBar.css';
import logo from './instagram-logo.png';
// import SearchInput from './SearchInput';
import ThreeIcons from './ThreeIcons';


const SearchBar = props => {
  return ( 
      <div className="search-bar">

       {/* <Logo /> */}
         <div>
           <img src={logo} className="App-logo" alt="instagram-logo" />
         </div>

         <div>
          <form onSubmit={props.search} onChange={props.handleChange}>
            <input name="search" type="text" placeholder="           &#x1f50d;Search"></input>
          </form>
         </div>
       {/* <SearchInput onSubmit={props.search} onChange={props.handleChange}/> */}
       <ThreeIcons />

      </div> 
    );
}
 
export default SearchBar;
