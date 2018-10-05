import React from 'react';
import logo from '../../assets/instagramlogin.png';
import styled from 'styled-components';
import './searchbar.css';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 150px;
    border-bottom: 1px solid #D3D3D3;
`;

const LeftItems = styled.div`
    display: flex;
    align-items: center;
`;

// this isn't working with styled-componenets but is with css!
// const InstaBadge = styled.i`
//     margin: 40px 0 40px 40px;
//     padding-right: 40px;
//     font-size: 70px;
//     border-right: 1px solid grey;
// `;

const InstaImage = styled.img`
    padding-left: 20px;
    height: 50px;
`;

const MiddleItems = styled.div`
    padding-left: 20px;
    height: 50px;
`;

const SearchInput = styled.input`
    width: 400px;
    height: 50px;
    text-align: center;
    font-size: 25px;
    color: grey;
`;

const RightItems = styled.div`
`;

const SearchBar = () => {
    return ( 
        <Header>
            <LeftItems>
                <i className="fab fa-instagram"></i>
                <InstaImage src={logo} alt="logo" />
            </LeftItems>
            <MiddleItems>
                <SearchInput type="text" placeholder="&#128269; Search" />
            </MiddleItems>
            <RightItems>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </RightItems>
        </Header>
    );
}

export default SearchBar;