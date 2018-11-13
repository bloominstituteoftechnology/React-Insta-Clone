import React from 'react';

const SearchBarForm = props => {

  const input = props.inputText;
 
  return (
    <div>
      <form >
        <input 
          className="input-text fas fa-search"
          type="text"
          placeholder="&#xf002; Search"
          value={props.filter}
          onChange={props.handleInputChange}/>
      </form>
    </div>
  );
};

export default SearchBarForm;