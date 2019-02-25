import React from 'react';
import LogOut from '../../Login/LogOut';
import styled from 'styled-components';

const SearchHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 30px 10px;
`;
const InstaLogo = styled.img`
    height: 25px;
`;
const SearchBar = styled.input`
    text-align: center;
`;
const SearchButtons = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 50px;
`;
const NavLogo = styled.img`
    height: 25px;
`;
const SearchHeart = styled.img`
    padding-left: 20px;
    height: 25px;
`;

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return ( 
        <SearchHeader>
            <InstaLogo src="https://png.icons8.com/ios/1600/instagram-new.png" alt="instagram logo"/>
            <form> 
                <SearchBar type="text" placeholder="search"></SearchBar>
            </form>
            <SearchButtons>
                <NavLogo src="https://cdn1.iconfinder.com/data/icons/superthick-app-ui/128/explore-compass-travel-512.png" alt="nav logo" />
                <SearchHeart className="searchHeart" src="http://www.pngall.com/wp-content/uploads/2016/04/Instagram-Heart-Transparent.png" alt ="heart logo"/>
            </SearchButtons>
            <LogOut />
        </SearchHeader> 
        );
    }
}

export default Search;