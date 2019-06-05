import React from 'react';

export default function SearchBar (props) {
    return (
        <div
          className='search-bar'>
              <input
                type='text'
                className='search-input'
                onKeyDown={props.search}
              />
        </div>
    )
}