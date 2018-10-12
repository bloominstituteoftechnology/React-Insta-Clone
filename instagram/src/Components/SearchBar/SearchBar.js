
import React from 'react';

import './SearchBar.css';

const SearchBar = (props) => {
    return (
       <header>
           <div>
            <img src="https://s3-eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2016/05/11170038/Instagram_Logo-1002x1003.jpg" alt=""/>
           <h1> Instagram </h1>
           </div>

           <form onSubmit={props.searchHandler}>
           <input className='input' value={props.value} placeholder="⚲ Search" onChange={props.inputHandler}></input>
            </form>
            
            <div>
                <img src="https://www.freeiconspng.com/uploads/compass-icon-22.png" alt=""/>
                <img src="https://images.vexels.com/media/users/3/147091/isolated/preview/5f8a1ea9c90ceed8d92999bc824417eb-instagram-heart-icon-by-vexels.png" alt=""/>
                <img src="data:image/png;base64,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" alt=""/>
            </div>
        </header>
    )
}

export default SearchBar