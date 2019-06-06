import React from 'react';
import styled from 'styled-components';


const Header = styled.header`
height: 100px;
background: #ffffff;
border-bottom: .5px solid black;
display: flex;
justify-content: space-between;
`;

const LogoHeader =styled.div`
width: 300px;
`;

const LogoImage = styled.img`
height: 50%;
object-fit: contain;
`; 


const SearchInput = styled.input`
height: 30px;
width:300px;
text-align: center;
`;


export default function SearchBar (props) {
    return (
      <Header>
        <LogoHeader>
          {/* <LogoImage src={} alt=""/>
          <LogoImage src={} alt=""/> */}
        </LogoHeader>
          <SearchInput
            type="text"
            placeholder="Search"
            onKeyDown={props.search}
          />
        
      </Header>
    )
}