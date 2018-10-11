import React from "react";
import logo from "../../images/instagram-new-logo.png";
import {Header, LogoHeader, LogoImage, SearchDiv, UserDiv} from "../../styles";

const SearchBar = props => {
    return (
        <Header>
            <LogoHeader>
                <i className="fa fa-2x fa-instagram" aria-hidden="true"></i>
                <LogoImage src={logo} alt="logo"></LogoImage>
            </LogoHeader>
            <SearchDiv>
            <form onSubmit={props.searchPosts}>
            <input 
                className="fa fa-search"
                name= "search" 
                placeholder="&#xF002; Search" 
                value={props.search}
                onChange={props.searchInputHandler}
                type="text"
                />
            </form>
            </SearchDiv>
            <UserDiv>
                <i className="fa fa-2x fa-compass" aria-hidden="true"></i>
                <i className="fa fa-2x fa-heart-o" aria-hidden="true"></i>
                <i className="fa fa-2x fa-user-o" aria-hidden="true" onClick={props.logout}></i>
            </UserDiv>
        </Header>
    );
}

export default SearchBar;