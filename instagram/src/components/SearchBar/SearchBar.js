import React from 'react';

const SearchBar= props =>{
  return(
      <div className = "search-bar">
        <form onSubmit = {(e)=>props.submitFunction(e)}>
          <input onChange = {(e)=>props.handleChange(e)} type = "text" value = {props.fieldValue} /><input type ="submit" value = "Submit"/>
        </form>

      </div>

  );
}

export default SearchBar;
