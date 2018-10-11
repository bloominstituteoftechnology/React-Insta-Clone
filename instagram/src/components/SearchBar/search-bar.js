import React from 'react';
import insta_logo from '../../images/insta_logo.png';
import instagramTextLogo from'../../images/instagram-text-logo.png';
import compass from '../../images/compass.png';
import heart from '../../images/Instagram-Heart.png';
import person from '../../images/Instagram-Person.png';
import line from'../../images/line.png';
import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
`;

const logoheader = styled.logoheader`
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


`;

const Logoimage = styled.Logoimage`


`
 const SearchBar = (props) => {
    return (
    <header className = 'searchBarContainer'>
        <logoheader className  = 'leftContent'>
            <img type='instaLogo' src={insta_logo} alt = 'logo' />
            <img className = 'line' src ={line} alt = 'line' />
            <img className = 'textLogo' src={instagramTextLogo} alt = 'text logo'/>
        </logoheader>
         <form className = 'searchBarFunction'>
           
            <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
            
        </form>
         <logoimage className ='rightContent'>
            <img className ='compass' src={compass} alt ='compass' />
            <img className = 'heart' src = {heart} alt ='heart'/>
            <img className ='person' src ={person} alt = 'person'/>
        </logoimage>
    </header>
    )}
 export default SearchBar;