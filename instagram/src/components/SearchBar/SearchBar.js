import React from 'react';
import { Input} from 'reactstrap';
import '../instagram.css';


const SearchBar = (props) => {
  return (
    <div>
      <Input type="search" name="search" id="searchBar" placeholder="font-awesome Search" />
    </div>
  )
}

export default SearchBar;
