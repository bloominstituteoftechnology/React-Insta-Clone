import React from 'react';
// import './SearchBar.css';

import logo_name from './imgs/instagram_logo.svg'
import compass_icon  from './imgs/compass.svg'
import heart_icon  from './imgs/heart.svg'
import person_icon from './imgs/person.svg'

import styled from 'styled-components'

const Header = styled.header`
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 2rem;
`
const BrandingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Divider= styled.div`
    border-left:1px solid  black;
    width: 1px;
    height: 30px;
    margin: 0rem 1rem;
`
const InputWrapper= styled.div``

const SearchInput = styled.input`
    background-color:light-gray;
    border: solid rgb(182, 182, 182);
    border-width: 1px 1px;
    border-radius:2px;

    :placeholder{
        text-align: center;
    }

    :placeholder-shown{
        background: url('./imgs/search.svg')  no-repeat scroll 25px;
    }

`
const IconWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 110px;
`

const Icon =  styled.img`
    max-width:25px;
    max-height:25px;
`
const Logo =  styled(Icon)`
    max-height: 30px;
    max-width:30px;
    height: 100%;
    width: 100%;
`
const LogoName = styled.img`
    max-width: 100px;
    height:auto;
    padding-top:10px;
`




const SearchBar = props => {
    return ( 
        <Header>
            <BrandingContainer>
                <Logo src={process.env.PUBLIC_URL + `/imgs/logo.jpg`} alt="logo"/>
                <Divider></Divider>
                <LogoName src={logo_name} alt="meh" className="logo-name"/>
            </BrandingContainer>
            
            <InputWrapper>
                <SearchInput type="text" 
                    placeholder="Search" 
                    name="userSearch"
                    onChange={props.changeHandler}
                    value={props.userSearch} 
                />
            </InputWrapper>
            
            <IconWrapper>
                <Icon src={compass_icon} alt="" />
                <Icon src={heart_icon} alt="" />
                <Icon src={person_icon} alt="" />
            </IconWrapper>
               
        </Header> 
    );
}
 
export default SearchBar;