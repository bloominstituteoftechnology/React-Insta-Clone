import React from 'react';



const SearchBar = (props) => {

    return (
        <div className='searchbar'>
            <img src='https://i2.wp.com/www.sleepapnea.org/wp-content/uploads/2017/04/instagram-logo.png?ssl=1'/>

            

            <input type='text'
            placeholder='Search'
            name="searchInput"
            value={props.searchInput}
            onChange={props.searchHandler}
            />
           
            

            <div>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>

        </div> 
    
    )
}

export default SearchBar