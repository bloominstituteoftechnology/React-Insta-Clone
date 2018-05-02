import React from 'react';

// components
import { SearchBarLogo } from './SearchBarLogo';
import { Input } from '../misc/Input';
import { Button } from '../misc/Button';

export const SearchBarContainer = props => {
  return (
    <div className="searchbar-container">
      <SearchBarLogo />

      <Input
        handleInputValueChange={ props.handleInputValueChange }
        inputClassName={ props.inputClassName }
        inputName={ props.inputName }
        inputPlaceHolder='Search'
        inputValue={ props.inputValue }
      />

      <Button
        buttonContent='C' />
      <Button
        buttonContent='H' />
      <Button
        buttonContent='P' />
    </div>
  );
};