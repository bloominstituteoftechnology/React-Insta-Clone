import React from 'react';
import './SearchBar.css';

const SearchLogo = (props) => {
    return (
        <div className='search-logo'>
            <i class="fab fa-instagram fa-2x" aria-hidden='false'></i>
            <div className='divider'> | </div>
            <img
                className='instagram'
                src='https://vignette.wikia.nocookie.net/logopedia/images/a/aa/Instagram_wordmark.svg/revision/latest?cb=20140110161419'
                alt='instagram'
            />
        </div>
    )
}

export default SearchLogo;