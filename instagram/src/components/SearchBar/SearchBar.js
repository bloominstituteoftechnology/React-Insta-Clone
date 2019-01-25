import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';
import InstagramLogo from './InstagramLogo.png';


const WrapperHeader = styled.header`
  display: flex;
  border: 1px solid orange;
}
`;

const LogoHeader = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 50%;
    border: 1px solid blue;
    justify-content: space-evenly;
    `;



const LogoImage = styled.img`
    width: 10%;
    height: 40px;
    display: flex;
    margin-top: 20px;

`;




const SearchBar = props => {
    return (
        <WrapperHeader>
            <LogoImage src= {InstagramLogo} alt="Instagram Logo" />
            <LogoHeader>
                <span>|</span>
                <h1>Instagram</h1>
            </LogoHeader>
            <form onSubmit={props.filterPost}>
                <input onChange={props.inputFilteredUserName} type="text" placeholder="Search" />
            </form>
            <img src="" alt="Explore" />
            <img src="" alt="Activity Feed" />
            <img src="" alt="Profile" />
        </WrapperHeader>
    );
};

export default SearchBar;