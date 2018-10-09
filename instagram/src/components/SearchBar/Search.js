import React from 'react';

let Search = props => {
    return (
           <div>
                <i className="fas fa-search" />
        <input className="search" placeholder="&#x1f50d; &nbsp; Search" type="text" onChange={props.searchHandler}></input>
           </div>
    )
}

export default Search;