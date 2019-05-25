import React from 'react';
import styled from 'styled-components';


const InstaHeaderSection = styled.div`
display: flex; 
flex-direction: row;
justify-content: space-between;

// border: 2px solid green; 
width: 800px;
margin-left: 17%;


`;

const InstaLogo = styled.img`
 z-index: -1;
 position: relative;
height: 5%;
left: -239px;
border-left: 1px solid gray;

`;

const Logo = styled.i`
font-size: 30px;
padding: 0 10px;
`;




const UserIcons = styled.div`
display:flex;
flex-direction: flex-end;
padding: 10px; 
`;


const SearchForm = styled.div`
padding: 10px; 
margin-left: -310px;
// border: 1px solid red;


`;





function SearchBar(props) {
    return (

     <InstaHeaderSection>
    
    <Logo>
    <i class="fab fa-instagram"></i>
   </Logo>
    <InstaLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" width="100"  alt="instagram-name" />
    
    
    {/* instaheader div */}

  
  <SearchForm>
    
    <form>
    <input type="text" placeholder="Search.." name="search" autoComplete="off"></input>
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>

</SearchForm>

    

    <UserIcons>
    <i class="far fa-compass"></i>
    <i class="far fa-heart"></i>
    <i class="far fa-user"></i>
    </UserIcons>
    
    
    {/* ^SearchBar end div */}
    
    
    </InstaHeaderSection>  //main div 

    )}

    export default SearchBar;


    // class SearchBar