import React from 'react';
import {StyleSearchInput, StyleSearhBar, StyleImgLogo, StyleWordLogo} from "./SearchStyle";

const Search= props => { 
    return (
        <StyleSearhBar>
            <StyleImgLogo src = 'https://i1.wp.com/www.vectorico.com/wp-content/uploads/2018/02/Instagram-Logo.png?resize=300%2C300&ssl=1'/>
            <StyleWordLogo src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'/>
            <form onSubmit = {props.filtered}>
                <StyleSearchInput placeholder = 'Search' name = 'filterFor' onChange = {props.inputChange}></StyleSearchInput>
            </form>    
        </StyleSearhBar>
    );
}

export default Search;