import React from 'react';
import './search.css';
import styled from 'styled-components';

const StyledImg = styled.img`
    width:200px;
    margin-left: 20px;
    padding:10px;
    border-left: 2px solid lightgrey;
    margin-top: 15px;
`

const SearchBar = props => {
    return (
        <div className='searchBar'>
            <div className="imgs-left" >
                <i className="fab fa-instagram fa-4x"></i>
                <styledImg src="https://buxton.com.au/static/img/instagram.svg"  alt="insta Logo" />
            </div>
            <div className="center-content" >
                <input type='text' placeholder=" &#x1F50D;search" className="search-bar-input" onChange={props.change} value={props.value} />
            </div>
            <div className="imgs-right" >
                <a href="#"> <i className="far fa-compass fa-2x icon"></i> </a>
                <a href="#"> <i className="far fa-heart fa-2x icon"></i> </a>
                <a href="#"> <i className="far fa-user fa-2x icon"></i> </a>
            </div>
        </div>
    )
}


export default SearchBar;