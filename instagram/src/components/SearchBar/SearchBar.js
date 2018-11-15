import React from 'react';
import styled from 'styled-components';
import * as Icon from 'react-feather';


const StyledForm = styled.form`
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 100%;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid gray;
    background-color: white;
    padding: 10px 0;
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;

    div {
        border-right: 1px solid black;
        height: 20px;
        margin: 0;
    }

    h3 {
        margin: 0 10px;
        font-size: 20px;
        font-style: italic;
    }
    svg {
        margin: 0 10px;
    }
`

const InputHolder = styled.div`
    position: relative;
    width: 500px;

    input {
        width: 100%;
        padding: 5px;
        font-size: 20px;
        box-sizing: border-box;
        text-align: center;
    }

    svg {
        position: absolute;
        top: 15px;
        left: 10px;
    }
`

const SearchForm = props => {
    return (
            <StyledForm onSubmit={props.searchItems}>
                <LogoContainer>
                    <Icon.Instagram />
                    <div></div>
                    <h3>InstaClone</h3>
                </LogoContainer>
                <InputHolder>
                    <input type="text" name="searchText" 
                    placeholder="enter search criteria" value={props.searchText}
                    onChange={props.handleChange} />
                    <Icon.Search color="gray" />
                </InputHolder>
                <LogoContainer>
                    <Icon.Compass />
                    <Icon.Heart />
                    <Icon.User />
                </LogoContainer>
            </StyledForm>
    );
}

export default SearchForm;