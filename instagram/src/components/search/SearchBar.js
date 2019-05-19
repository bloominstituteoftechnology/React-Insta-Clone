import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';

const Bar = styled.nav`
display: flex;
justify-content: space-around;
font-size: 32px;
margin: 25px auto;
padding: 10px;
width: 100%;
border-bottom: 1px solid lightgrey;

    p{
        font-size: 32px;
    border-left: 1px solid lightgray;
    padding-left: 5%;
    margin: 0;
    }
    .search{
    font-size: 19px;
    text-align: center;
    height: 25px;
    border-radius: 5PX;
    }
    .searchIcons{
    display: flex;
    justify-content: space-evenly;
    width: 25%;

    }
    i{
        margin: auto 0;
    }
`;


const SearchBar = (props) => {
    return (
        <Bar>
            <i className="fab fa-instagram"></i>
            <p className='logo'>Instagram</p>
            <input type='text' placeholder='search' className='search' onKeyDown={props.searchPost} />
            <div className='searchIcons'>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </Bar>
    );
}

export default SearchBar;