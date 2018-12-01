import React from 'react';
import LogoInstagram from "../../assets/logoInstagram.png";
import sc from "styled-components";

const SearchBarDiv = sc.div`
  border-bottom: 1px solid #3333;
  height: 80px;
  line-height: 70px;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
`;
const LogoWrapDiv = sc.div`
     height: 50px;
`;
const LogoInstaImg = sc.img`
   height: 100%;
`;
const SearchInputDiv = sc.div`
    height: 50px;
`;
const SocialWrap = sc.div`
    height: 50px;
`;
const SocialDiv = sc.div`
    width: 50px;
`;

const SearchBar = props => {
    return (
        <SearchBarDiv>
            <LogoWrapDiv>
                <LogoInstaImg
                     src={LogoInstagram}
                     alt='Instagram Logo'
                     />
            </LogoWrapDiv>
            <SearchInputDiv>
                <input type='text' placeholder='What are you looking for...' onKeyDown={props.handleSearch}  />
            </SearchInputDiv>
                <SocialWrap>
                    <SocialDiv>
                        <i className='fa fa-compass' />
                    </SocialDiv>
                    <SocialDiv>
                        <i className='fa fa-heart' />
                    </SocialDiv>
                    <SocialDiv>
                        <i className='fa fa-user-circle' />
                    </SocialDiv>
                </SocialWrap>
        </SearchBarDiv>
    );
}

export default SearchBar;