import React from 'react';
import SearchBar from './SearchBar';
import SearchLogo from './SearchLogo';
import SearchNav from './SearchNav';
import './SearchBar.css';



class SearchContainer extends React.Component {

    render () {
        return (
            <div className={"searchContainer"}>
                <SearchLogo />
                <SearchBar />
                <SearchNav />
                
            </div>
        )
    }
}


export default SearchContainer;