import React from 'react';
import {Input} from './SearchBarStyled';

const SearchBarForm = props => {

  const input = props.inputText;
 
  return (
    <div>
      <form >
        <Input 
          className="fas fa-search"
          type="text"
          placeholder="&#xf002; Search"
          value={props.filter}
          onChange={props.handleInputChange}></Input>
      </form>
    </div>
  );
};

export default SearchBarForm;