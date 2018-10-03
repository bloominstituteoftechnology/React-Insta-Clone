import React from 'react'
import './searchbar.css';
import SearchbarIcons from "./SearchbarIcons";
import Searchbar from "./Searchbar";

const SeachbarContainer = props => {
    return(
        <div className={'searchbarContainer'}>
        <SearchbarIcons />
        <Searchbar />
        </div>
    );
}


export default SeachbarContainer