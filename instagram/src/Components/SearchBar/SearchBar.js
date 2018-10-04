import React from 'react';


class SearchBar extends React.Component {

    render () {
        return (
            <div className={'searchBar'}>
                 <input className={"inputSearch"} placeholder={ "Search"} />  
            </div>
        )
    }
}


export default SearchBar;

