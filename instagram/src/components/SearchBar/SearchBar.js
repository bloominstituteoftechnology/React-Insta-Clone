import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    height: 50%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledInput = styled.input`
    margin: 0 20%;
    width: 22%;
    line-height: 1.5rem;
    text-align: center;
`;

const StyledI = styled.i`
    color: black;
    font-size: 2rem;
    margin: 2%;
`;

const StyledImg = styled.img`
    width: 12%;
    border-left: 2px solid black;
    padding-left: 1%;
`;

const SearchBar = props => {
    return (
        <StyledForm className="search-bar"
            onSubmit={props.searchHandler}  >
            <StyledI className="fas fa-camera-retro align-left"></StyledI> 
            <StyledImg className="insta-logo align-left" src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-text-black-png.png" alt="instagram logo" /> 
            <StyledInput placeholder="&#128269; Search"
                    value={props.search}
                    onChange={props.updateSearch}></StyledInput> 
            <StyledI className="far fa-compass align-right"></StyledI>
            <StyledI className="far fa-heart align-right"></StyledI>
            <StyledI className="fas fa-user-alt align-right"></StyledI>
        </StyledForm>


    );
}

export default SearchBar;