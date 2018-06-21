import { Navbar, Nav } from 'reactstrap';
import styled from "styled-components";

export const Header = styled.div`
    position: sticky;
    top: 0;
    z-index: 3;
    background: white;
`;

export const StyledNavBar = styled(Navbar)`
    max-width: 1010px;
    margin: 0 auto;
    padding: 0px 40px;
`;

export const InstagramWord = styled.img`
    width: 130px;
    height: 39px;
    border-left: 1px solid black;
    padding-left: 20px;   
`;

export const InstagramLogo = styled.img`
    height: 30px;
    width: 30px;
    margin-right: 20px;
`

export const InstagramSearch = styled.input`
    background: #fafafa;
    border-radius: 3px;
    border: solid 1px #dbdbdb;
    width: 215px;
    text-align: center;

    &::-webkit-input-placeholder {
        color: #999;
        font-size: 14px;
    }
    
    &::-moz-placeholder {
        color: #999;
        font-size: 14px;
    }
    
    &:-ms-input-placeholder {
        color: #999;
        font-size: 14px;
    }
    
    &::placeholder {
        color: #999;
        font-size: 14px;
    }
    
`

export const StyledNav = styled(Nav)`
    align-items: center;
`

export const PersonIcon = styled.img`
    margin-left: 30px;
    width: 30px;
    height: 27px;
    cursor: pointer;    
`

export const SearchIcons = styled.i`
    margin-left: 30px;
    cursor: pointer;
`
