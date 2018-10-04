import React from 'react';
import './SearchBar.css';

const SearchLogo = (props) =>  {
    return(
        <div className="searchLogo">
            <i className="fab fa-instagram fa-2x" aria-hidden="true"></i>
            <div className="separator">|</div>
            <img src="https://vignette.wikia.nocookie.net/logopedia/images/a/aa/Instagram_wordmark.svg/revision/latest?cb=20140110161419" alt="instagram wordmark" />
        </div>
    )
}

export default SearchLogo;
