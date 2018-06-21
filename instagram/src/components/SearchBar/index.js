import React from 'react';
// import './style.css';
import styled from "styled-components";

const Header = styled.div
`   margin: 0 auto;
    display: flex;
    justify-content: space-around;
    margin: 2rem 0 1rem;
    color: #212121;
    align-items: center;
    font-size: 1.5rem; 
`;
const FaSearch = styled.div
`
    display: flex;
    align-items: center;
`;
const Line = styled.div`
    padding-right: 1rem;
    height: 100%;
    color: #212121;
`;
const TextInsta = styled.div`
    font-family: 'Just Another Hand', Helvetica, sans-serif;
    font-size: 2rem;
    font-weight: 200;
`;

const Input = styled.input` 
    height: 1.5rem;
    width: 100%;
    border-radius: 2px;
    border: 0.5px solid gray;
`


const SearchBar = (props) => {
    return (
        <Header>
            <FaSearch>
                <div className='instaLogo'><i className="fa fa-instagram fa-lg" aria-hidden="true"></i></div>
                <Line>|</Line>
                <TextInsta>Instagram</TextInsta>
            </FaSearch>
            <div>
                <Input type="text" placeholder="Search.." onKeyDown={props.handleSearch} />
            </div>
            <FaSearch>
                <div className='band'><i className="fa fa-bandcamp" aria-hidden="true"></i></div>
                <div className='heart'><i className="fa fa-heart-o" aria-hidden="true"></i></div>
                <div className='user'><i className="fa fa-user-o" aria-hidden="true"></i></div>
            </FaSearch>

        </Header>
    )
}
 
export default SearchBar;