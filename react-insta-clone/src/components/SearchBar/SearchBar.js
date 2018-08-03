import React from 'react';
import './SearchBar.css';
import { Header, LogoHeader } from "../styled-components/styled-components";

const SearchBar = props => {
    console.log('imProps', props)
    return (
        <Header>
            <LogoHeader>
                logo
            </LogoHeader>
          
               <input type="text" 
               placeholder="Search" 
               onKeyDown={props.searchPosts}
                />
         
            <div className='logoRight'>
                logo
            </div>
        </Header>
    );
};

export default SearchBar;