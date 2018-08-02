import React from 'react';
import './SearchBar.css';
import { Container } from "./styled-components";

const SearchBar = props => {
    console.log('imProps', props)
    return (
        <Container>
            <div className='logoLeft'>
                logo
            </div>
            <div className='input'>
               <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
            </div>
            <div className='logoRight'>
                logo
            </div>
        </Container>
    );
};

export default SearchBar;