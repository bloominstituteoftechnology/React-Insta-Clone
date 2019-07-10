import React from 'react';
import styled from 'styled-components';
import { IoLogoInstagram, IoIosHeartEmpty } from "react-icons/io";
import { FiCompass, FiUser } from "react-icons/fi";

const Header = styled.header`
@import url('https://fonts.googleapis.com/css?family=Lobster&display=swap');

    height: 5rem;
    border-bottom: 1px solid lightgray;


nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    vertical-align: middle;
    margin: 0 auto;
    width: 80%;
}
.logo__icon {
    margin: 0 auto;
    align-items: center;
    padding: 0.8rem 3rem 0 0;
    width: .5rem;
    font-size: 3rem;
}
.icon__container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    vertical-align: middle;
    height: 5rem;
    align-items: center;
    padding: 0 5rem 0 0;
    width: 2rem;
    font-size: 1.5rem;
    
    div {
    margin: 0 auto;
    padding: 1rem;
    }
}
.search{
    height: 1.5rem;
    width: 12rem;
    margin: 0 auto;
}
input {
    text-align: center;
    width: 205px;
    height: 18px;
    border: 1px solid rgb(211, 209, 209);
    font-size: 12px;
    border-radius: 3px;
    color: rgb(211, 209, 209);
    background: rgb(250, 250, 250);
    padding: 5px;
  }
`;
const LogoHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    height: 3rem;
    padding: 1rem;
`;

const LogoImage = styled.div`
font-family: 'Lobster', cursive;
    font-size: 2rem;
    border-left: 1px solid black;
    padding: 0 0 0 1rem;
`;

const SearchBar = ({ handleSearch, search }) => {
    return (
        <Header className="header">
        <nav>
        <LogoHeader>
                <div className="logo__icon">
                <IoLogoInstagram />
                </div>
                <LogoImage>
                    Instagram
                </LogoImage>
        </LogoHeader>
            <input
            className="search"
            placeholder= "&#128269; Search"
            value={search}
            onChange={handleSearch}
            />
            <div className="icon__container">
            <div><FiCompass /></div>
            <div><IoIosHeartEmpty /></div>
            <div><FiUser /></div>
            </div>
        </nav>
            
        </Header>
    )
}

export default SearchBar;