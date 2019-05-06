import React from 'react';

function SearchBar() {
    return (
        <div>
            <i className="fab fa-instagram" aria-hidden="true"></i>
            <h1>Instagram</h1>
            <section>
                <input type='text' placeholder='search'></input>
            </section>
            <div className='icons'>
                <i className="fa fa-compass" aria-hidden="true"></i>
                <i className="fa fa-heart" aria-hidden="true"></i>
                <i className="fa fa-user" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default SearchBar;