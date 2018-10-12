import React from "react";
//import "./search.css"
import styled from 'styled-components'

const HeaderDiv =  styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    max-width: 604px;
    width: 100%;
`;

const LogoHeader = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-evenly;
`
const LogoImg = styled.img`
    height: 30px;
`

const SearchBox = styled.input`
    display: flex;
    width: 45%;
    border-radius: 3px;
`

const Search = props =>{
    return (
        <HeaderDiv>
            <LogoHeader>
                <LogoImg src="https://tcnjathletics.com/common/controls/image_handler.aspx?thumb_id=0&image_path=/images/2017/9/11/glyph_logo_May2016.png" alt="camera"/>
                <LogoImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="insta"/>
            </LogoHeader>

            <SearchBox 
                placeholder="search"
                value={props.text}
                onChange={props.input}
                onKeyDown={(event) => {
                    if (event.keyCode === 13) {
                        props.search(props.text)
                    }
                }} 
            >
            </SearchBox>

            <LogoHeader>
                <i className="far fa-compass fa-2x"></i>
                <i className="far fa-heart fa-2x"></i>
                <i className="fas fa-user fa-2x"></i>
            </LogoHeader>
        </HeaderDiv>
    )
}

export default Search;