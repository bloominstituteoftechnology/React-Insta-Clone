import React from 'react';
import styled from 'styled-components';


// Styles using styled-components 
const Searchheader = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid grey;
`
const Leftsearch = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
`
const Midsearch = styled.div`
    width: 200px;
    display: flex;
    justify-content: center;
`
const Rightsearch = styled.div`
display: flex;
justify-content: flex-end;
`
const Title = styled.h1`
    padding-left: 15px;
    font-family: 'Grand Hotel', cursive;
    font-size: 35px;
`
const Input = styled.input`
    align-self: center;
    text-align: center;
    width: 200px;
    height: 25px;
    border: 1px solid #DDD;
    border-radius: 3px;
    background-color: #fafafa;
    outline: none;
` 


const SearchBar = props => {
    return (
        <Searchheader>
            <Leftsearch>
                <img src="https://img.icons8.com/ios/50/000000/instagram-new.png" alt="instagram logo" id="insta-logo"/>
                <Title>Instagram</Title>
            </Leftsearch>

            <Midsearch>
                <Input type="text" placeholder="Search" onKeyDown={props.searchPosts}  />
            </Midsearch>

            <Rightsearch>
                <img src="https://img.icons8.com/ios/50/000000/adventures.png" alt="explore icon"/>
                <img src="https://img.icons8.com/ios/50/000000/like.png" alt="like icon"/>
                <img src="https://img.icons8.com/ios/50/000000/user.png" alt="profile icon"/>
            </Rightsearch>

        </Searchheader>
    )
}

export default SearchBar