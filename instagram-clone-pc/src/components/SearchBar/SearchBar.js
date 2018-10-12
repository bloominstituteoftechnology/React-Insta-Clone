import React from 'react';
import styled from 'styled-components';

const Logo = styled.h1`
    font-family: 'Mali', cursive;
    font-size: 28px;
    text-shadow: 3px 3px 5px darkgray;
    color: white;
`

const SearchBarAttribute = styled.div`
    padding: 15px;
    background: gray;
    width: 100%;
    border-bottom: 1px solid black;
    background: #FB3B45;
`

const SBIcon = styled.i`
    font-size: 30px;
    text-shadow: 3px 3px 5px darkgray;
    color: white;
`

const Icons = styled.div`
    font-size: 28px;
    text-shadow: 3px 3px 5px darkgray;
    color: white;
`

const ExitBtn = styled.i`
    cursor: pointer;
    color: white;
`

const SearchBox = styled.input`
    border-radius: 5px;
    border: 1px solid black;
    box-shadow: 3px 3px 5px darkgray;
    font-family: 'Mali', cursive;
    font-size: 20px;
    padding-left: 10px;
`

const SearchBar = (props) => {
    return (
        <SearchBarAttribute className="d-flex justify-content-start align-items-center">
            <SBIcon className="fa fa-instagram col-1"></SBIcon>
            <Logo className="col-4">Avengers Gram</Logo>
            <form className="col-4">
                <SearchBox placeholder="&#128269; Search" type="text" onChange={props.onChange} name="input" value={props.input} className="input-search" />
            </form>
            <Icons className="col-3 d-flex justify-content-around">
                <i className="fa fa-compass"></i>
                <i className="fa fa-heart"></i>
                <ExitBtn className="fa fa-sign-out" onClick={props.logOut}></ExitBtn>
            </Icons>
        </SearchBarAttribute>
    );
}

export default SearchBar;