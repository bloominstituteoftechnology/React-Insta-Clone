import React from 'react';
import insta_logo from '../../images/insta_logo.png';
import instagramTextLogo from'../../images/instagram-text-logo.png';
import compass from '../../images/compass.png';
import heart from '../../images/Instagram-Heart.png';
import person from '../../images/Instagram-Person.png';
import line from'../../images/line.png';
import styled from 'styled-components';
import { Alert } from 'reactstrap';

const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
`;

const Logoheader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 30px;
    padding: 20px;
`;
const Img = styled.img`
    margin: 0px;

    ${props => (props.type === 'instaLogo' ? `height: 40px;` : null)}
    ${props => (props.type === 'line' ?
    `
    width: 20px;
    height: 45px;
    margin: 0px 10px;
    `: null)}

    ${props => (props.type === 'textLogo' ? `width: 125px;` : null)}   

    ${props => (props.type === 'compass' ? `
    height: 35px;
    margin: 0px 5px;
` : null)} 
    ${props => (props.type === 'heart' ? `
    height: 35px;
    margin: 0px 5px;
    ` : null)} 

    ${props => (props.type === 'person' ? `
    height: 35px;
    margin: 0px 5px;
    ` : null)} 
    

`;
const Input = styled.input`
    padding: 5px 10px;
    text-align: center;

`

const Logoimage = styled.div`
 width: 200px;

    
`
 const SearchBar = (props) => {
    return (
    <Header className = 'searchBarContainer'>
        <Logoheader className  = 'leftContent'>
            <Img type='instaLogo' src={insta_logo} alt = 'logo' />
            <Img type = 'line' src ={line} alt = 'line' />
            <Img type = 'textLogo' src={instagramTextLogo} alt = 'text logo'/>
        </Logoheader>
         <form className = 'searchBarFunction'>
           <Input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
         </form>
         <Logoimage  >
            <Img type ='compass' src={compass} alt ='compass' />
            <Img type = 'heart' src = {heart} alt ='heart'/>
            <Img type ='person' src ={person} alt = 'person'/>
        </Logoimage>
    </Header>
    )}
 export default SearchBar;