import React from 'react';

let Search = props => {
    return (
           <div>
                <i className="fas fa-search" />
                <input type="text" placeholder="Search" name="searchString" value={props.value} onChange={props.searchHandler} />
           </div>
    )
}

export default Search;