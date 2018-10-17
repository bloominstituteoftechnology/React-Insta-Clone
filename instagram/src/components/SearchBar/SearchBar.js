import React from 'react';
import logo from '../../assets/instagramlogin.png';
import styled from 'styled-components';

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

const InstaBadge = styled.i`
    margin: 40px 0 40px 40px;
    padding-right: 40px;
    font-size: 70px;
    border-right: 1px solid grey;
`;

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

const CompassAndHeart = styled.i`
    margin: 0 25px;
    font-size: 50px;
    font-weight: 100;
    -webkit-text-stroke: 3px white;
`;

const UserFontAwesome = styled.i`
    margin: 0 25px;
    font-size: 50px;
    font-weight: 100;
    -webkit-text-stroke: 3px white;
    padding-right: 20px;    
`;

const SearchBar = props => {
    return ( 
        <Header>
            <LeftItems>
                <InstaBadge className="fab fa-instagram" />
                <InstaImage src={logo} alt="logo" />
            </LeftItems>
            <MiddleItems>
                <SearchInput type="text" placeholder="&#128269; Search" onKeyDown={props.searchPosts} />
            </MiddleItems>
            <RightItems>
                <CompassAndHeart className="far fa-compass" />
                <CompassAndHeart className="far fa-heart" />
                <UserFontAwesome className="far fa-user" />
            </RightItems>
        </Header>
    );
}

export default SearchBar;