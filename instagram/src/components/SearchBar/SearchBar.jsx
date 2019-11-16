import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';




// const SearchBar = props => {
//     return (
//         <div className="search-bar">
//             <div className="logo">
//                 <i className="fab fa-instagram"></i>
//                 <img src="https://3rockmarketing.com/wp-content/uploads/2016/09/instagram-logo.png" alt=""/>
//             </div>
//             <div className="search-input">
//                 <form>
//                     <input 
//                         type="text" 
//                         placeholder="search"
//                         onChange={props.filterPosts}
//                     />
//                 </form>
//             </div>
//             <div className="navigation-logos">
//                 <i className="far fa-compass"></i>
//                 <i className="far fa-heart thisheart"></i>
//                 <i className="far fa-user"></i>
//             </div>
//         </div>
//     )
// }

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 23px;
    padding-bottom: 15px;
    border-bottom: 1px solid lightgray;
`;

const Logo = styled.div`
    display: flex;
    margin-left: 90px;
`;

const CameraDiv = styled.i`
    font-size: 35px;
    margin-right: 35px;
`;

const Cursive = styled.img`
    height: 40px;
    width: 115px;
`;

const SearchInput = styled.div`
    margin-right: 100px;
`;

const Input = styled.input`
    width: 140%;
    height: 24px;
    border: 1px solid lightgray;
    border-radius: 3px;
    text-align: center;
`;

const NavLogos = styled.div`
    display: flex;
    margin-right: 70px;
`;

const NavDiv = styled.i`
    font-size: 24px;
    margin-right: 30px;
`;

const NavDivII = styled.i`
    font-size: 24px;
    margin-right: 30px!important;
`;

const SearchBar = props => {
    return (
        <SearchContainer>
            <Logo>             
                <CameraDiv className="fab fa-instagram" />               
                <Cursive alt="cursive" src="https://3rockmarketing.com/wp-content/uploads/2016/09/instagram-logo.png" />
            </Logo>
            <SearchInput>
                <Input
                    type="text" 
                    placeholder="search"
                    onChange={props.filterPosts}
                />
            </SearchInput>    
            <NavLogos>
                <NavDiv className="far fa-compass" />
                <NavDivII className="far fa-heart" />
                <NavDiv className="far fa-user" />
            </NavLogos> 
        </SearchContainer>
    )
}

export default SearchBar