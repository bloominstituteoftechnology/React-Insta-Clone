import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';

const Search = styled.div`
    display:flex;
    justify-content:space-around;
    margin-top:20px;
`;

const Logos = styled.div`
    display:flex;
    justify-content:space-between;
`;
 const SearchBox = styled.div`

 `;
 const Icons = styled.div`

 `;

const SearchBar = props =>{
    return(
            <Search>
                <Logos>
                    <a href="/instagram/public/index.html">
                        <div className="insta"></div>
                    </a>
                    <a href="/instagram/public/index.html">
                        <span className="divider">|</span>
                    </a>
                    <a href="/instagram/public/index.html">
                        <div className="instagram"></div>
                    </a>
                </Logos>
                <SearchBox>
                    <form>
                        <input className="search-logo" value={props.inputText} onKeyDown={props.searchPosts} placeholder="Search" />
                    </form>
                </SearchBox>
                <Icons className="icons">
                    <Icons className="explore"></Icons>
                    <Icons className="heart"></Icons>
                    <Icons className="profile"></Icons>
                </Icons>
            </Search>
    )
}

export default SearchBar;