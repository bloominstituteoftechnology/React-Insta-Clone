import React from 'react';
import styled from 'styled-components';

const SearchBarHeader=styled.header`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
    border-bottom: 1px solid lightgrey;
    height:70px;
`;

const SearchBarEdges=styled.div`
    display:flex;
    flex-direction:row;
`;

const VerticalBarWrap=styled.div`
     margin:0 10%;
`;

const HeartWrap=styled.div`
    margin:0 30%;
`;


const SearchBar = (props) => {
    return(
        <SearchBarHeader>
            <SearchBarEdges>
                <i className="fab fa-instagram"/>
                <VerticalBarWrap>|</VerticalBarWrap>
                <div>Instagram</div>
            </SearchBarEdges>
            <div>
                <input type="text" placeholder="Search" onKeyDown={props.searchPosts}/>
            </div>
            <SearchBarEdges>
                <i className="far fa-compass"></i>
                <HeartWrap>
                    <i className="far fa-heart"></i>
                </HeartWrap>
                <i className="far fa-user"></i>
            </SearchBarEdges>
        </SearchBarHeader>
    )
}

export default SearchBar;
