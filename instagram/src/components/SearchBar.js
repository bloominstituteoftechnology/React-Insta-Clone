import React from 'react';


const SearchBar = () => {

    return (
        <div className='searchbar'>
            <img src='https://i2.wp.com/www.sleepapnea.org/wp-content/uploads/2017/04/instagram-logo.png?ssl=1'/>

            <input  placeholder='Search'/>

            <div>
                <i class="far fa-compass"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-user"></i>
            </div>

        </div> 
    
    )
}

export default SearchBar