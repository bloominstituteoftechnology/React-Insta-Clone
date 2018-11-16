import React from 'react';
import logo from './../images/Instagram_logo.jpg';
import styled from 'styled-components'
import './SearchBar.css';





const Header = styled.header`
    border-bottom: 2px solid #E9E9E9;
    width: 100%;
    margin-top: 30px;
    padding-bottom: 15px;
    justify-content: space-between;
    align-items: center;
    display: flex;  

    @media (max-width: 500px) {
        display: flex;
        justify-content: space-between;
        // justify-content: space-evenly;
        // padding: 0 1rem;
        // margin-bottom: 15px;
    }
`;

const LogoHeader = styled.div `
    display: flex;
    align-items: center;
    width: 20%;

    @media (max-width: 500px) {
        width: 40%;
    }
`;

const InstaIcon = styled.i `
    border-right: 1px solid gray;
    padding-right: 2rem;

    @media (max-width: 500px) {
        display: none;
    }
`;

const LogoImage = styled.img `
    width: 40%;
    margin-left: 15px;  

    
`;

const SearchInput = styled.input `
    border: 1.5px solid #DBDBDB;
    border-radius: 4px;
    padding: .8rem;
    width: 30%;
    margin-left: 40px;
    background-color: #FAFAFA;
    font-family: 'Font Awesome 5 free', 'Open Sans', sans-serif;
    font-size: 15px; 

   
`;

const Icons = styled.div `
    display: flex;
    justify-content: space-evenly;
    width: 20%;
`;

const ConnectIcons = styled.i `
    margin-right: 30px;
`;


const SearchBar = (props) => {
    return (
    
            <Header>
                <LogoHeader>
                    <InstaIcon className='fab fa-instagram fa-3x'></InstaIcon>
                    <LogoImage src={logo} alt='Instagram Logo' className='insta-logo'/>
                </LogoHeader>

                        <SearchInput
                            className='fa fa-input'
                            name='filteredSearch'
                            onChange={props.handleSearchInput}
                            placeholder='  Search'
                            type='text'
                            value={props.filteredSearch}
                        />
                    
                
                
                <Icons>
                    <ConnectIcons className="far fa-compass fa-2x"></ConnectIcons>
                    <ConnectIcons className="far fa-heart fa-2x"></ConnectIcons>
                    <ConnectIcons className="far fa-user fa-2x"></ConnectIcons>
                </Icons>

            </Header>
        
    );
}



export default SearchBar;
