import React from 'react';

const SearchBarForm = props => {

  const input = props.inputText;
 
  return (
    <div>
      <form >
        <input 
          className="input-text fas fa-search"
          type="text"
          placeholder="&#xf002; Search"/>
      </form>
    </div>
  );
};

export default SearchBarForm;