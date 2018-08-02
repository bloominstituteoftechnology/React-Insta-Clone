import React from 'react';
// import './search.css';
import styled from 'styled-components';

const Searchbar = styled.div`
width: 100vw;
height: 70px;
background: white;
margin: auto;
display: flex;
justify-content: space-evenly;
align-items: center;
position: fixed;
top: 0;
border-bottom: solid lightgray 1px;
input {
    box-sizing: border-box;
    padding-left: 4%;
    height: 30px;
    border-radius: 5px;
    width: 170px;
    outline: none;
    border: dotted gray 1px;
    font-size: 110%;
}
`
const Logo = styled.div`
display:flex;
align-items: center;
i {
    font-size: 250%;
    border-right: solid gray 1px;
    padding-right: 15%;
    box-sizing: border-box;
}
`
const Iconz = styled.div`
display: flex;
justify-content: space-between;
width: 150px;
`
const Instap = styled.p`
font-family: 'Lobster Two', cursive;
font-size: 200%;
padding-left: 8%;
`



const SearchBar = (props) => {
    return (
        <Searchbar>
            <Logo>
            <i className="fab fa-instagram"></i> <Instap> Instaclone </Instap>
            </Logo>
            <input onChange={props.search} className="fa fa-input" placeholder="&#xf002; Search"/>
            <Iconz>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </Iconz>
        </Searchbar>
    )
}

export default SearchBar;