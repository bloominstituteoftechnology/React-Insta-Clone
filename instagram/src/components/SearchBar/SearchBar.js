import React from "react";
import "./SearchBar.css"
import styled from "styled-components"

const Bar = styled.div`
    width: 100%;
    height: 75px;
    border: 1px solid rgb(230,230,230);
    background-color: rgb(255,255,255);
    display: flex;
    justify-content: center;
`;

const BarWithinContainer = styled.div`
    width: 70%;
    height: 75px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoContainer = styled.div`
    width: 18%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const CameraImage = styled.img.attrs({
    src: "./img/camera_logo.png"
})`
    flex: initial;
    padding-right: 15px;
`;

const DividingBar = styled.img.attrs({
    src: "./img/divider.png"
})`
    flex: initial;
`;

const InstagramTextLogo = styled.img.attrs({
    src: "./img/text_logo.png"
})`
    flex: initial;
    padding-top: 8px;
    padding-left: 15px;
`;

const SearchBarContainer = styled.div`
    width: 23%;
`;

const MenuNavigation = styled.nav`
    width: 14%;
    height: 27px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavigationCompass = styled.img.attrs({
    src: "./img/compass_icon.png"
})`
    width: 25px;
    height: 25px;
`;

const NavigationHeart = styled.img.attrs({
    src: "./img/heart_icon.png"
})`
    width: 25px;
    height: 22px;
`;

const NavigationPerson = styled.img.attrs({
    src: "./img/person_icon.png"
})`
    width: 25px;
    height: 23px;
`;

const SearchBar = props => (
    <Bar> {/*Container which contains the entire search bar content*/}
        <BarWithinContainer>
            <LogoContainer> {/*Contains all the elements that make up the logo*/}
                <CameraImage /> {/*Camera picture part of logo*/}
                <DividingBar /> {/*Dividing bar between logo elements*/}
                <InstagramTextLogo /> {/*Text logo of Instagram*/}
            </LogoContainer> {/*End logo container*/}
            <SearchBarContainer><input onChange={props.handleSearchInput} type="text" className="search-bar montserrat" placeholder="Search"></input></SearchBarContainer> {/*Search bar*/}
            <MenuNavigation> {/*Contains navigation icon buttons*/}
                <NavigationCompass /> {/*Compass menu icon*/}
                <NavigationHeart /> {/*Heart menu icon*/}
                <NavigationPerson /> {/*Person menu icon*/}
            </MenuNavigation> {/*End menu navigation*/}
        </BarWithinContainer>
    </Bar> 
);

{/*SEARCH BAR HAS NO PROPS TO VALIDATE, NO PROP TYPE CHECK*/}

export default SearchBar;