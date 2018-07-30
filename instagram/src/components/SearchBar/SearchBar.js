import React from 'react';

const SearchBar = props => {
    return(
        <div>
            <div>
                <img alt="Camera Logo" />
                <img alt="Instagram Logo" />
            </div>
            <div>
                <input value="Search" />
            </div>
            <div>
                <img alt="Compass Logo" />
                <img alt="Heart Logo" />
                <img alt="Person Logo" />
            </div>
        </div>
    );
}

export default SearchBar;