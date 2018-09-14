import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';

const SearchBarDiv = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1.5px solid lightgray;
    align-items: flex-end;
`

const InstagramLogosDiv = styled.div `
    display: flex;
    margin: 8px;
`

const InstagramCamImg = styled.img `
    width: 45px;
    height: 45px;
`

const InstagramBrandImg = styled.img `
    width: 90px;
    height: 30px;
    margin-left: 8px;
    margin-top: 10px;
`

const SearchBarInput = styled.input ` 
    width: 160px;
    height: 25px;
    color: grey;
    margin: 8px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid lightgray;
    background: #FAFAFA;
`

const InstagramIconDiv = styled.div `
    display: flex;
    justify-content: space-between;
    margin: 8px;
`

const ExploreImg = styled.img `
    width:30px;
    height: 30px;
`

const LikesImg = styled.img `
    width:30px;
    height: 30px;
`

const UserImg = styled.img `
    width:30px;
    height: 30px;
`

function SearchBar(props) {
    return (
        <SearchBarDiv>
            <InstagramLogosDiv>
                <InstagramCamImg src="https://i1.wp.com/www.vectorico.com/wp-content/uploads/2018/02/Instagram-Logo.png?w=600&ssl=1" alt="1" />
                <InstagramBrandImg src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-text-black-png.png" alt="2" />
            </InstagramLogosDiv>
            <form onChange={props.searchInput} onSubmit={props.searchSubmit}>
                <SearchBarInput name="searchInput" type="text" placeholder="search.." />    
            </form>
            <InstagramIconDiv>
                <ExploreImg src="https://static.thenounproject.com/png/682472-200.png" alt="1" />
                <LikesImg src="https://static.thenounproject.com/png/682470-200.png" alt="2" />
                <UserImg onClick={props.searchLogout}src="https://static.thenounproject.com/png/682480-200.png" alt="3" />
            </InstagramIconDiv>
        </SearchBarDiv>
    )
}

export default SearchBar;