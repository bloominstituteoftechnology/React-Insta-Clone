import React from "react";
import styled from 'styled-components';

const Iptctnr = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;

  &:focus {
    outline: none;
  }
`;

const Srchipt = styled.input`
  width: 80%;
  padding: 5px;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

const SearchBox = props => {
  return (
    <Iptctnr>
      <Srchipt
        type="text"
        value={props.textOnProps}
        onChange={props.handleInputOnProps}
        name={props.inputName}
      />
    </Iptctnr>
  );
};

export default SearchBox;
