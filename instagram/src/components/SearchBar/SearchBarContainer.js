import React from 'react';

// components
import { SearchBarLogo } from './SearchBarLogo';
import { Input } from '../misc/Input';
import { Button } from '../misc/Button';

export const SearchBarContainer = () => {
  return (
    <div className="searchbar-container">
      <SearchBarLogo />
      <Input />
      <Button
        buttonContent='C' />
      <Button
        buttonContent='H' />
      <Button
        buttonContent='P' />
    </div>
  );
};