import React from 'react';
import icon from '../../assets/instagram-icon.png';
import logo from '../../assets/instagram-logo.png';
import { 
    Header, 
    Img, 
    HeaderInputDiv, 
    HeaderInputField, 
    HeaderIconsDiv,
    WelcomeDiv,
    LogOutBtn, 
    BtnDiv
} from './SearchBarStyles';

const instagramUrl = 'http://www.instagram.com';

const SearchBar = (props) => {
    return (
        <Header>
            <div>
                <a href = { instagramUrl }><Img instagramIcon src = { icon } /></a>
                <a href = { instagramUrl }><Img instagramLogo src = { logo } /></a>
            </div>

            <HeaderInputDiv>
                <i className = 'fas fa-search'></i>

                <HeaderInputField 
                    type = 'search' 
                    placeholder = 'Search' 
                    onChange = { props.handleSearch } 
                />
            </HeaderInputDiv>

            <HeaderIconsDiv>
                <i className = 'far fa-compass'></i>
                <i className = 'far fa-heart'></i>
                <i className = 'far fa-user'></i>
            </HeaderIconsDiv>

            <WelcomeDiv>Welcome back, { props.username }.</WelcomeDiv>
            <BtnDiv>
                <LogOutBtn onClick = { props.logOut } >Log Out</LogOutBtn>
            </BtnDiv>
        </Header>
    );
}

export default SearchBar;
