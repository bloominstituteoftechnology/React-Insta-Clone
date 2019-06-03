import React from 'react';

export default function SearchBar (props) {
    return (
        <div
          className='search-bar'>
              <input
                type='text'
                className=''
                onchange={props.onChange}
                onKeyDown={props.enterButton}
              />
        </div>
    )
}