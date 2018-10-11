import React from 'react';
import Search from '../SearchBar/Search';
import Posts from './Posts';

export default (props) => {
  return (
    <div>
        <Search search={props.search} />
        <Posts data = {props.data.filter.length > 0
        ? props.data.filter
        : props.data.data}/>
    </div>
  )
}
