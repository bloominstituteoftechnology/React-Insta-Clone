import React from 'react';

class SearchBar extends React.Component {
    
    render() {
        return (
            <div>
                <input type='text' placeholder='Search' className="search-box" />
            </div>
        )
    }
    
}

export default SearchBar;